/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setClearClicked, setFilteredData, setFilters, setToggleDisplay } from "../store/csvDataSlice";

const Selector = ({ data, selectorText, placeholderForSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const clearButtonStatus = useSelector((state) => state.csvData.clearClicked);

  useEffect(() => {
    if (selected) {
      switch (selectorText) {
        case "Host Name":
          dispatch(
            setFilters({ filterType: "hostname", filterValue: selected })
          );
          break;
        case "Discovery Method":
          dispatch(
            setFilters({ filterType: "disc_method", filterValue: selected })
          );
          break;
        case "Discovery Year":
          dispatch(
            setFilters({ filterType: "disc_year", filterValue: selected })
          );
          break;
        case "Discovery Facility":
          dispatch(
            setFilters({ filterType: "disc_facility", filterValue: selected })
          );
          break;
      }
    }
  }, [selected]);

  useEffect(() => {
    if (clearButtonStatus) {
      setSelected("");
      setInputValue("");
      setOpen(false);
      dispatch(setClearClicked(false));
      dispatch(setToggleDisplay(false));
      dispatch(setFilteredData([]));
      dispatch(setFilters({ filterType: "hostname", filterValue: "" }));
      dispatch(setFilters({ filterType: "disc_method", filterValue: "" }));
      dispatch(setFilters({ filterType: "disc_year", filterValue: "" }));
      dispatch(setFilters({ filterType: "disc_facility", filterValue: "" }));
    }
  }, [clearButtonStatus]);

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
        className={`fixed bg-white mt-2 overflow-y-auto border border-gray-400 rounded ${
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
        {Array.from(data)
          ?.sort((a, b) => a.localeCompare(b))
          ?.map((item, index) => (
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
