/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const data = useSelector((state) => state.csvData.data);

  return (
    <div className="h-4/5 flex justify-center pl-14 pr-14 pt-8">
      <table className="w-full -z-10">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left pt-2 pb-2">PLANET NAME</th>
            <th className="text-left pt-2 pb-2">HOST NAME</th>
            <th className="text-left pt-2 pb-2">DISCOVERY METHOD</th>
            <th className="text-left pt-2 pb-2">DISCOVERY YEAR</th>
            <th className="text-left pt-2 pb-2">DISCOVERY FACILITY</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            if (index <= 49) {
              return (
                <tr className="border-b border-gray-300" key={index}>
                  <td className="text-left pt-2 pb-2">{row[0]}</td>
                  <td className="text-left pt-2 pb-2">{row[1]}</td>
                  <td className="text-left pt-2 pb-2">{row[2]}</td>
                  <td className="text-left pt-2 pb-2">{row[3]}</td>
                  <td className="text-left pt-2 pb-2">{row[4]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
