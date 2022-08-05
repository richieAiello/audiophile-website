import useProduct from '../../hooks/useProduct';

const DetailsBox = props => {
  const product = useProduct(props.slug);
  const includes = product?.includes;

  return (
    <section
      className="container text-black mb-[5.5rem]"
      slug={props.slug}
    >
      <h2 className="heading mb-6">In the box</h2>
      <ul className="grid gap-y-2">
        {includes &&
          includes.map(item => {
            return (
              <li key={includes.indexOf(item)}>
                <span className="font-bold text-orange mr-6">
                  {`${item.quantity}x`}
                </span>
                <span className="opacity-50">{item.item}</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default DetailsBox;
