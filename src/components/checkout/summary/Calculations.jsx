const Calculations = ({ cart }) => {
  const total = cart.reduce((total, current) => {
    return total + current.quantity * current.price;
  }, 0);
  const vat = Math.floor(total * 0.2);
  const grandTotal = total + 50;

  return (
    <div className="uppercase w-full mb-8">
      <div className="flex justify-between items-center w-full mb-2">
        <p className="opacity-50 font-medium">Total</p>
        <p className="text-[1.125rem]">{`$ ${total.toLocaleString()}`}</p>
      </div>
      <div className="flex justify-between items-center w-full mb-2">
        <p className="opacity-50 font-medium">Shipping</p>
        <p className="text-[1.125rem]">$ 50</p>
      </div>
      <div className="flex justify-between items-center w-full mb-6">
        <p className="opacity-50 font-medium">Vat (Included)</p>
        <p className="text-[1.125rem]">{`$ ${vat.toLocaleString()}`}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="opacity-50 font-medium">Grand Total</p>
        <p className="text-[1.125rem]">{`$ ${grandTotal.toLocaleString()}`}</p>
      </div>
    </div>
  );
};

export default Calculations;
