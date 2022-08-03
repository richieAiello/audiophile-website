import { Link } from 'react-router-dom';
import clsx from 'clsx';

const SeeProduct = ({ className, path, orange, clear, black }) => {
  return (
    <Link
      to={`details/${path}`}
      className={`
        uppercase font-bold text-[0.8125rem] leading-[1.11rem] tracking-[0.0625rem]
        py-[0.9375rem] px-8 duration-[250ms] block
        ${className}
        ${clsx({
          'bg-orange': orange,
          'text-white': orange,
          'bg-transparent': clear,
          'text-black': clear,
          'border-black': clear,
          border: clear,
          'bg-black': black,
          'text-white': black,
        })}
      `}
    >
      See Product
    </Link>
  );
};

export default SeeProduct;
