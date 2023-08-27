/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import QueryPanel from "./components/QueryPanel";
import Display from "./components/Display";
import { useDispatch } from "react-redux";
import { setData } from "./store/csvDataSlice";
import papa from "papaparse";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/src/data/exoplanet_data.csv")
      .then((res) => res.text())
      .then((text) => {
        papa.parse(text, {
          header: true,
          complete: (result) => {
            const dataArray = result.data.map((row) => {
              return Object.values(row);
            });
            dispatch(setData(dataArray))
          },
        });
      });
  }, [dispatch]);

  return (
    <div className="h-screen">
      <QueryPanel/>
      <Display />
    </div>
  );
};

export default App;
