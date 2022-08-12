import useFindProduct from '../../hooks/useFindProduct';

const DetailsBox = props => {
  const product = useFindProduct(props.slug);
  const includes = product?.includes;

  return (
    <section
      className="mb-[5.5rem] md:mb-[7.5rem] md:grid md:grid-cols-[1fr,1fr]"
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
