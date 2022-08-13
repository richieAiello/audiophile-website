import { useNavigate } from 'react-router-dom';

const BackBtn = props => {
  const nav = useNavigate();

  return (
    <button
      type="button"
      onClick={() => nav(-1)}
      className="text-hero-black font-bold mb-6 duration-[250ms]
      hover:text-orange focus:text-orange lg:mb-14"
    >
      Go Back
    </button>
  );
};

export default BackBtn;
