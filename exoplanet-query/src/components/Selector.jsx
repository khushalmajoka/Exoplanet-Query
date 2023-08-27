/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setClearClicked } from "../store/csvDataSlice";

const Selector = ({ data, selectorText, placeholderForSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const clearButtonStatus = useSelector((state) => state.clearClicked);

  useEffect(() => {
    if (clearButtonStatus) {
      setSelected(""); 
      setInputValue("");
      dispatch(setClearClicked(false));
    }
  }, [clearButtonStatus, dispatch]);

  return (
    <div className="w-1/6 ml-5 mr-5 font-medium h-10">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-3 pl-4 pr-4 flex items-center justify-between border border-gray-400 rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 20
            ? selected?.substring(0, 20) + "..."
            : selected
          : selectorText}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto border border-gray-400 rounded ${
          open ? "max-h-60 visible" : "max-h-0 collapse"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={placeholderForSearch}
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {Array.from(data)?.map((item, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              item?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${item?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
            onClick={() => {
              if (item?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
