import { Link } from 'react-router-dom';
import clsx from 'clsx';

const SeeProduct = ({ path, orange, clear, black }) => {
  return (
    <Link
      to={`/details/product/${path}`}
      className={`btn py-[0.9375rem] px-8 w-max
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
