import { useNavigate } from 'react-router-dom';

const BackBtn = props => {
  const nav = useNavigate();

  return (
    <button
      type="button"
      onClick={() => nav(-1)}
      className="text-black opacity-50 mb-6 hover:underline focus:underline
      lg:mb-14"
    >
      Go Back
    </button>
  );
};

export default BackBtn;
