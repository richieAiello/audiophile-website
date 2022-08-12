import Item from './Item';

const ItemWrapper = ({ cart }) => {
  return (
    <div className="grid w-full py-8 col-span-2 gap-y-6">
      {cart.map(item => {
        return <Item key={item.slug} product={item} />;
      })}
    </div>
  );
};

export default ItemWrapper;
