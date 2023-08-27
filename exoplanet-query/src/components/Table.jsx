/* eslint-disable react/prop-types */
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Table = ({ filteredData }) => {
  return (
    <table className={`w-full font-bricolageGrotesque -z-10 h-fit`}>
      <thead>
        <tr className="border-b border-gray-300 tracking-wide">
          <th className="text-left pt-2 pb-2 w-1/5">
            PLANET NAME{" "}
            <span className="inline-flex">
              <FaSortUp />
              <FaSortDown />
            </span>
          </th>
          <th className="text-left pt-2 pb-2 w-1/5">
            HOST NAME{" "}
            <span className="inline-flex">
              <FaSortUp />
              <FaSortDown />
            </span>
          </th>
          <th className="text-left pt-2 pb-2 w-1/5">
            DISCOVERY METHOD{" "}
            <span className="inline-flex">
              <FaSortUp />
              <FaSortDown />
            </span>
          </th>
          <th className="text-left pt-2 pb-2 w-1/5">
            DISCOVERY YEAR{" "}
            <span className="inline-flex">
              <FaSortUp />
              <FaSortDown />
            </span>
          </th>
          <th className="text-left pt-2 pb-2 w-1/5">
            DISCOVERY FACILITY{" "}
            <span className="inline-flex">
              <FaSortUp />
              <FaSortDown />
            </span>
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
                    <span style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}>
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
  );
};

export default Table;
