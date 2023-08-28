/* eslint-disable react/prop-types */
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { setFilteredData } from "../store/csvDataSlice";
import { useDispatch } from "react-redux";

const Table = ({ filteredData }) => {
  const dispatch = useDispatch();
  const handleUpClick = (columnName) => {
    const copy = [...filteredData];
    switch (columnName) {
      case "planet_name":
        copy.sort((a, b) => a[0].localeCompare(b[0]));
        dispatch(setFilteredData(copy));
        break;
      case "hostname":
        copy.sort((a, b) => a[1].localeCompare(b[1]));
        dispatch(setFilteredData(copy));
        break;
      case "disc_method":
        copy.sort((a, b) => a[2].localeCompare(b[2]));
        dispatch(setFilteredData(copy));
        break;
      case "disc_year":
        copy.sort((a, b) => a[3].localeCompare(b[3]));
        dispatch(setFilteredData(copy));
        break;
      case "disc_facility":
        copy.sort((a, b) => a[4].localeCompare(b[4]));
        dispatch(setFilteredData(copy));
        break;
    }
  };

  const handleDownClick = (columnName) => {
    const copy = [...filteredData];
    switch (columnName) {
      case "planet_name":
        copy.sort((a, b) => b[0].localeCompare(a[0]));
        dispatch(setFilteredData(copy));
        break;
      case "hostname":
        copy.sort((a, b) => b[1].localeCompare(a[1]));
        dispatch(setFilteredData(copy));
        break;
      case "disc_method":
        copy.sort((a, b) => b[2].localeCompare(a[2]));
        dispatch(setFilteredData(copy));
        break;
      case "disc_year":
        copy.sort((a, b) => b[3].localeCompare(a[3]));
        dispatch(setFilteredData(copy));
        break;
      case "disc_facility":
        copy.sort((a, b) => b[4].localeCompare(a[4]));
        dispatch(setFilteredData(copy));
        break;
    }
  };

  return (
    <div className="w-full">
      <table className={`w-full font-bricolageGrotesque h-fit`}>
        <thead>
          <tr className="border-b border-gray-300 tracking-wide">
            <th className="text-left pt-2 pb-2 w-1/5">
              <div className="flex items-center">
                <span className="mr-2">PLANET NAME</span>
                <span>
                  <FaSortUp
                    className="-mb-3 cursor-pointer"
                    onClick={() => handleUpClick("planet_name")}
                  />
                  <FaSortDown
                    className="cursor-pointer"
                    onClick={() => handleDownClick("planet_name")}
                  />
                </span>
              </div>
            </th>
            <th className="text-left pt-2 pb-2 w-1/5">
              <div className="flex items-center">
                <span className="mr-2">HOST NAME</span>
                <span>
                  <FaSortUp
                    className="-mb-3 cursor-pointer"
                    onClick={() => handleUpClick("hostname")}
                  />
                  <FaSortDown
                    className="cursor-pointer"
                    onClick={() => handleDownClick("hostname")}
                  />
                </span>
              </div>
            </th>
            <th className="text-left pt-2 pb-2 w-1/5">
              <div className="flex items-center">
                <span className="mr-2">DISCOVERY METHOD</span>
                <span>
                  <FaSortUp
                    className="-mb-3 cursor-pointer"
                    onClick={() => handleUpClick("disc_method")}
                  />
                  <FaSortDown
                    className="cursor-pointer"
                    onClick={() => handleDownClick("disc_method")}
                  />
                </span>
              </div>
            </th>
            <th className="text-left pt-2 pb-2 w-1/5">
              <div className="flex items-center">
                <span className="mr-2">DISCOVERY YEAR</span>
                <span>
                  <FaSortUp
                    className="-mb-3 cursor-pointer"
                    onClick={() => handleUpClick("disc_year")}
                  />
                  <FaSortDown
                    className="cursor-pointer"
                    onClick={() => handleDownClick("disc_year")}
                  />
                </span>
              </div>
            </th>
            <th className="text-left pt-2 pb-2 w-1/5">
              <div className="flex items-center">
                <span className="mr-2">DISCOVERY FACILITY</span>
                <span>
                  <FaSortUp
                    className="-mb-3 cursor-pointer"
                    onClick={() => handleUpClick("disc_facility")}
                  />
                  <FaSortDown
                    className="cursor-pointer"
                    onClick={() => handleDownClick("disc_facility")}
                  />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr className="border-b border-gray-300" key={index}>
              <td className="text-left pt-2 pb-2 w-1/5 text-blue-500 cursor-pointer">
                {
                  <a
                    href={`https://exoplanetarchive.ipac.caltech.edu/overview/${row[0]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-flex">
                      {row[0]}
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "5px",
                        }}
                      >
                        <FiExternalLink />
                      </span>
                    </span>
                  </a>
                }
              </td>
              <td className="text-left pt-2 pb-2 w-1/5">{row[1]}</td>
              <td className="text-left pt-2 pb-2 w-1/5">{row[2]}</td>
              <td className="text-left pt-2 pb-2 w-1/5">{row[3]}</td>
              <td className="text-left pt-2 pb-2 w-1/5">{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center pt-5 text-[#7b7b7bf5]">
        Data collected from{" "}
        <a
          className="text-left pt-2 pb-2 w-1/5 text-[#1b71fff0] cursor-pointer"
          href="/src/data/exoplanet_data.csv"
        >
          this table.{" "}
        </a>
        You can read about{" "}
        <a
          className="text-left pt-2 pb-2 w-1/5 text-[#1b71fff0] cursor-pointer"
          href="https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS"
        >
          it here.
        </a>
      </div>
    </div>
  );
};

export default Table;
