const DetailsProductPrice = ({ price }) => {
  return (
    <p
      className="font-bold text-[1.125rem] leading-[1.536875rem]
      tracking-[0.080625rem] mb-8"
    >
      {`$ ${price}`}
    </p>
  );
};

export default DetailsProductPrice;
