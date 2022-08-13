import { useRef } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';

const CategoryNavCard = props => {
  const linkRef = useRef(null);

  const handleCardClick = e => {
    linkRef.current.click();
  };

  return (
    <div
      className="category-card bg-grey rounded-lg w-full h-[165px] relative duration-[250ms]
      text-center pt-[5.5rem] text-black font-bold uppercase tracking-[0.0625rem] lg:h-[204px]
      lg:pt-[7.25rem]"
      onClick={handleCardClick}
      role="link"
      tabIndex="0"
    >
      <img
        src={`/shared-images/desktop/image-category-thumbnail-${props.mod}.png`}
        alt=""
        className="absolute left-0 right-0 mx-auto -top-16 w-44 lg:w-56 lg:-top-20"
      />
      <p className="text-[0.9375rem] leading-5 mb-4">{props.mod}</p>
      <Link
        to={`/category/${props.mod}`}
        ref={linkRef}
        tabIndex="-1"
        className=""
      >
        <span
          className="category-card__text text-[0.8125rem] opacity-50
          duration-[250ms]"
        >
          Shop
        </span>
        <img src={arrow} alt="" className="inline ml-3" />
      </Link>
    </div>
  );
};

export default CategoryNavCard;
