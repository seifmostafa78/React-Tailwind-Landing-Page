import LandingImg from "/src/assets/images/landing-img.png";

const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px] z-20">
          <div className="w-[750px] max-w-full">
            <img
              src={LandingImg}
              alt="landing-img"
              className="w-full h-fit object-contain"
            />
          </div>
          <div className="text-white text-center my-[30px]">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="md:w-[600px] text-md px-[15px] md:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
              nulla impedit commodi.
            </p>
          </div>
          <div>
            <a
              href="/"
              className="btn w-[280px] h-[60px] rounded-[30px] element-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] mt-[20px]">
        <img 
        src="/src/assets/images/bg-curvy-desktop.svg" 
        className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
