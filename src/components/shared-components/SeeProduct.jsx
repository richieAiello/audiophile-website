import { Link } from 'react-router-dom';
import clsx from 'clsx';

const SeeProduct = ({ path, orange, clear, black }) => {
  return (
    <Link
      to={`details/${path}`}
      className={`
        uppercase font-bold text-[0.8125rem] leading-[1.11rem] tracking-[0.0625rem]
        py-[0.9375rem] px-8 duration-[250ms] block
        ${clsx({
          'bg-transparent': clear,
          'text-black': clear,
          'border-black': clear,
          border: clear,
          'bg-orange': orange,
          'bg-black': black,
          'text-white': black || orange,
        })}
      `}
    >
      See Product
    </Link>
  );
};

export default SeeProduct;
