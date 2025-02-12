

const FeutureBox = ({ icon, title, desc }) => {
  return (
    <div className="element-center flex-col text-white text-center">
      <img
        src={`images/${icon}`}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="font-semibold text-xl my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default FeutureBox;
