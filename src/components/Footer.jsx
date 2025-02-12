import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+20121212121" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ]);

  const [listItems, setListItems] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px]">
      <div className="container">
        <a href="/">
          <img
            src="images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="flex justify-between flex-col md:flex-row flex-wrap mt-[30px] gap-[30px] text-white">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`images/${item.icon}`}
                  alt="phone-img"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {listItems.map((item) => (
              <li key={item}>
                <a
                  href="/"
                  className="hover:text-primary transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a className="hover:text-primary transition-all duration-200">
                  <div className="border w-[40px] h-[40px] rounded-full element-center cursor-pointer">
                    {item === "facebook" ? (
                      <FaFacebookF />
                    ) : item === "twitter" ? (
                      <FaTwitter />
                    ) : (
                      <FaInstagram />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
