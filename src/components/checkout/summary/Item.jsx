const Item = ({ product }) => {
  return (
    <div className="grid grid-flow-col grid-cols-[auto,1fr,auto] items-center font-bold uppercase">
      <img
        src={product.icon}
        alt=""
        className="rounded-lg w-16 h-16"
      />
      <div className="ml-4">
        <p className="">{product.name}</p>
        <p className="opacity-50 text-[0.875rem]">{`$ ${product.price}`}</p>
      </div>
      <p className="opacity-50 lowercase">x{product.quantity}</p>
    </div>
  );
};

export default Item;
