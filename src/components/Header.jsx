import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Sign in"]);
  const headerRef = useRef()

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(scrollY > 100){
            headerRef.current.style.background = "#0c1524";
            headerRef.current.style.padding = "20px 0";
        }
        else{
            headerRef.current.style.background = "transparent";
            headerRef.current.style.padding = "60px 0";
        }
    })
  }, [])

  return (
    <header ref={headerRef} 
    className="pt-[60px] w-full fixed top-0 left-0 z-50 transition-all duration-200">
      <div className="container flex justify-between items-center 
      gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="">
          <img 
          src="images/logo.svg"
          alt="logo-img"
          className="w-[175px] h-[66px] object-contain" 
          />
        </a>
        <ul className="flex gap-[50px]">
          {links.map((link) => (
            <li
              key={link}
              className="text-white opacity-[0.9] hover:opacity-[1] 
              hover:underline transition-all duration-200 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
