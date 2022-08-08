import CartItem from './CartItem';

const CartContents = ({ cart }) => {
  return (
    <div className="w-full py-8 col-span-2 grid gap-y-6">
      {cart.map(item => {
        return (
          <CartItem key={item.slug} cart={cart} product={item} />
        );
      })}
    </div>
  );
};

export default CartContents;
