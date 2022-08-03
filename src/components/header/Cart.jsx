const Cart = props => {
  return (
    <div
      className={`
        absolute z-10 container top-[7.125rem] rounded-lg left-0 right-0 mx-auto h-[400px] bg-red-200
        ${props.className}
      `}
    />
  );
};

export default Cart;
