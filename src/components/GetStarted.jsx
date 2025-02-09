const GetStarted = () => {
  return (
    <section>
      <div className="container relative">
        <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] w-[865px] max-w-full min-h-[275px] element-center flex-col p-[30px] text-center text-white">
          <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
            Get early access today
          </h3>
          <p className="w-[620px] max-w-full mx-auto mb-[30px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
            tempore? Vero adipisci eveniet voluptatibus cupiditate!
          </p>
          <form className="w-full flex justify-between items-center flex-wrap gap-[30px] md:px-[60px]">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="bg-white md:flex-1 w-full h-[50px] outline-none border-none rounded-[30px] text-sm text-black font-medium pl-[30px]"
            />
            <button
              type="submit"
              className="btn w-full md:w-[200px] h-[50px] rounded-[30px] cursor-pointer"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
