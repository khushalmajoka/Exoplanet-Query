/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import QueryPanel from "./components/QueryPanel";
import Display from "./components/Display";
import { useDispatch, useSelector } from "react-redux";
import { setData, setSearchClicked } from "./store/csvDataSlice";
import papa from "papaparse";

const App = () => {
  const filters = useSelector((state) => state.csvData.filters);
  const searchClickedStatus = useSelector(
    (state) => state.csvData.searchClicked
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/assets/exoplanet_data.csv")
      .then((res) => res.text())
      .then((text) => {
        papa.parse(text, {
          header: true,
          complete: (result) => {
            const dataArray = result.data.map((row) => {
              return Object.values(row);
            });
            dispatch(setData(dataArray));
          },
        });
      });
  }, []);

  useEffect(() => {
    if (
      searchClickedStatus &&
      filters.hostname === "" &&
      filters.disc_method === "" &&
      filters.disc_year === "" &&
      filters.disc_facility === ""
    ) {
      alert("You must select something.")
      dispatch(setSearchClicked(false))
    }
  }, [searchClickedStatus]);

  return (
    <div className="h-screen">
      <QueryPanel />
      <Display />
    </div>
  );
};

export default App;
