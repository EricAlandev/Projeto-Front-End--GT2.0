const BuyIcon = () => {
    return (
      <div className="relative flex items-center cursor-pointer">
        <img src="/assets/Buy.png" alt="Buy Icon" />
        <div className="absolute -top-2 -right-2 bg-[#C92071] rounded-full w-5 h-5 flex items-center justify-center text-white text-[13px] font-bold">
          2
        </div>
      </div>
    );
  };
  
  export default BuyIcon;
  