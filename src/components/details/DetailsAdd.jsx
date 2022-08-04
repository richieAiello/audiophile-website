import { useState } from 'react';

const DetailsAdd = props => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrementTotal = e => {
    return null;
  };

  const handleIncrementTotal = e => {
    return null;
  };

  return (
    <div
      className="grid grid-flow-col w-max gap-x-4"
      price={props.price}
    >
      <div className="flex items-center justify-between px-4 h-12 w-[7.5rem] bg-grey">
        <button
          type="button"
          aria-label="Subtract item from total."
          onClick={handleDecrementTotal}
          className="btn text-black hover:text-orange focus:text-orange"
        >
          -
        </button>
        <p className="btn">{quantity}</p>
        <button
          type="button"
          aria-label="Add item to total."
          onClick={handleIncrementTotal}
          className="btn text-black hover:text-orange focus:text-orange"
        >
          +
        </button>
      </div>

      <button
        type="button"
        // onClick={}
        className="btn py-[0.9375rem] pl-[2.125rem] pr-[1.9375rem] bg-orange text-white
        hover:bg-light-orange focus:bg-light-orange hover:text-hero-black focus:text-hero-black"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default DetailsAdd;
