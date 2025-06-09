const BuyIcon = () => {
  return (
    <div className="relative flex items-center cursor-pointer">
      <img
        src="/assets/Buy.png"
        alt="Buy Icon"
        className="w-6 h-6 max-[640px]:w-6 max-[640px]:h-4"
      />
      <div className="absolute -top-2 -right-2 bg-[#C92071] rounded-full w-5 h-5 flex items-center justify-center text-white text-[13px] font-bold
        max-[640px]:w-3 max-[640px]:h-3 max-[640px]:text-[9px] max-[640px]:-top-1.5 max-[640px]:-right-1.5">
        2
      </div>
    </div>
  );
};

export default BuyIcon;
