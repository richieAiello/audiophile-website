import { Link } from 'react-router-dom';

const CategoryCard = props => {
  return (
    <div className="bg-grey rounded-lg w-full h-[165px]">
      <img
        src={`./shared/desktop/image-category-thumbnail-${props.image}.png`}
        alt=""
        className="w-20"
      />
      <p>{props.text}</p>
      <Link to={props.path}>Shop</Link>
    </div>
  );
};

export default CategoryCard;
