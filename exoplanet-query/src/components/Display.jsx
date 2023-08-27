/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from './Table'
import NoResultFound from './NoResultFound';
import {
  setSearchClicked,
  setToggleDisplay,
  setFilteredData,
} from "../store/csvDataSlice";
import UnqueriedDisplay from "./UnqueriedDisplay";

const Display = () => {
  const data = useSelector((state) => state.csvData.data);
  const filters = useSelector((state) => state.csvData.filters);
  const filteredData = useSelector((state) => state.csvData.filteredData);
  const displayTable = useSelector((state) => state.csvData.toggleDisplay);

  const searchClickedStatus = useSelector(
    (state) => state.csvData.searchClicked
  );

  const clearClickedStatus = useSelector((state) => state.csvData.clearClicked);

  const dispatch = useDispatch();

  useEffect(() => {
    if(clearClickedStatus){
      dispatch(setToggleDisplay(false));
    }
  }, [clearClickedStatus]);

  useEffect(() => {
    if(searchClickedStatus){
      const filtered = data.filter((row) => {
        const hostnameFilterMatch =
          filters.hostname === "" || row[1] === filters.hostname;
  
        const discMethodFilterMatch =
          filters.disc_method === "" || row[2] === filters.disc_method;
  
        const discYearFilterMatch =
          filters.disc_year === "" || row[3] === filters.disc_year;
  
        const discFacilityFilterMatch =
          filters.disc_facility === "" || row[4] === filters.disc_facility;
  
        return (
          hostnameFilterMatch &&
          discMethodFilterMatch &&
          discYearFilterMatch &&
          discFacilityFilterMatch
        );
      });
      dispatch(setFilteredData(filtered));
      dispatch(setSearchClicked(false));
      dispatch(setToggleDisplay(true));
    }
  }, [searchClickedStatus]);

  return (
    <div className="h-fit min-h-[70%] flex justify-center pl-20 pr-20 pt-5 pb-10">
      {displayTable ? filteredData.length > 0 ? <Table filteredData={filteredData}/> : <NoResultFound/> : <UnqueriedDisplay />}
    </div>
  );
};

export default Display;
