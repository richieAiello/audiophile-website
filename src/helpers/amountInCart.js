const amountInCart = (cart, product) => {
  const array = cart.filter(
    item => item.slug === product.slug && item
  );
  return array.length;
};

export default amountInCart;
