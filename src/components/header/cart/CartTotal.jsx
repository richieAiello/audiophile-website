const CartTotal = ({ cart }) => {
  const total = cart.reduce((total, current) => {
    return total + current.quantity * current.price;
  }, 0);

  return (
    <div className="flex justify-between items-center w-full mb-6 col-span-2">
      <p className="uppercase opacity-50">Total</p>
      <p className="font-bold text-[1.125rem] leading-6">{`$ ${total.toLocaleString()}`}</p>
    </div>
  );
};

export default CartTotal;
