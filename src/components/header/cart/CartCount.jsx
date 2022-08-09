const CartCount = ({ cart }) => {
  const count = cart.reduce((total, current) => {
    return total + current.quantity;
  }, 0);

  return (
    <p className="font-bold text-[1.125rem] leading-7 tracking-[.0625rem]">
      Cart ({count})
    </p>
  );
};

export default CartCount;
