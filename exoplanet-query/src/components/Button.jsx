/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setSearchClicked, setClearClicked } from "../store/csvDataSlice";

const Button = ({ buttonText }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (buttonText === 'Search') {
      dispatch(setSearchClicked(true));
    } else if (buttonText === 'Clear') {
      dispatch(setClearClicked(true));
    }
  };

  return (
    <div className="m-3 h-8">
      <button
        className="bg-green-700 text-white font-medium tracking-wide rounded-md pl-5 pr-5 pt-2 pb-2"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
