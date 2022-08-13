const QuantityBtn = ({
  onDecrementClick,
  onIncrementClick,
  quantity,
  className,
}) => {
  return (
    <div
      className={`
        flex items-center justify-between bg-grey text-[1.125rem] h-12 font-bold
        ${className}
      `}
    >
      <button
        type="button"
        aria-label="Subtract item from total."
        onClick={onDecrementClick}
        className="text-xl text-black hover:text-orange focus:text-orange"
      >
        -
      </button>
      <span className=" text-base">{quantity}</span>
      <button
        type="button"
        aria-label="Add item to total."
        onClick={onIncrementClick}
        className="text-xl text-black hover:text-orange focus:text-orange"
      >
        +
      </button>
    </div>
  );
};

export default QuantityBtn;
