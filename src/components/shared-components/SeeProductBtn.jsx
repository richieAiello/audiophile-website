import { Link } from 'react-router-dom';
import clsx from 'clsx';

const SeeProductBtn = ({ path, orange, clear, black }) => {
  return (
    <Link
      to={`/details/${path}`}
      className={`btn py-[0.9375rem] px-8 w-max duration-[250ms]
        ${clsx({
          'bg-transparent': clear,
          'text-black': clear,
          'border-black': clear,
          'hover:bg-black hover:text-white': clear,
          'focus:bg-black focus:text-white': clear,
          border: clear,
          'bg-orange': orange,
          'hover:bg-light-orange hover:text-black': orange,
          'focus:bg-light-orange focus:text-black': orange,
          'bg-black': black,
          'hover:bg-[#4C4C4C]': black,
          'focus:bg-[#4C4C4C]': black,
          'text-white': black || orange,
        })}
      `}
    >
      See Product
    </Link>
  );
};

export default SeeProductBtn;
