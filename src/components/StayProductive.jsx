const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img src="images/illustration-stay-productive.png" alt="stay-img" />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!
            </p>
          </div>
          <a
            href="/"
            className="flex items-center gap-[15px] text-primary hover:text-[#42b0d1] 
            hover:border-[#42b0d1] transition-all duration-200 border-b-2 
            border-primary border-solid w-fit pb-1"
          >
            See how Fylo works
            <img
              src="images/icon-arrow.svg"
              alt="arrow-img"
              className="w-20px h-20px object-contain animate-arrow"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
