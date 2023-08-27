/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./Button";
import Selector from "./Selector";
import { useSelector } from 'react-redux';

const QueryPanel = () => {
  const data = useSelector(state => state.csvData.data)

  const hostnamesSet = new Set();
  const discoveryMethodSet = new Set();
  const discoveryYearSet = new Set();
  const discoveryFacilitySet = new Set();

  data.map((row) => {
    hostnamesSet.add(row[1]);
    discoveryMethodSet.add(row[2]);
    discoveryYearSet.add(row[3]);
    discoveryFacilitySet.add(row[4]);
  });

  return (
    <div className="h-1/5 p-10 flex items-center justify-center">
      <Selector
        data={hostnamesSet}
        selectorText="Host Name"
        placeholderForSearch="Search Host Name"
      />
      <Selector
        data={discoveryMethodSet}
        selectorText="Discovery Method"
        placeholderForSearch="Search Discovery Method"
      />
      <Selector
        data={discoveryYearSet}
        selectorText="Discovery Year"
        placeholderForSearch="Search Discovery Year"
      />
      <Selector
        data={discoveryFacilitySet}
        selectorText="Discovery Facility"
        placeholderForSearch="Search Discovery Facility"
      />
      <Button buttonText="Search"/>
      <Button buttonText="Clear"/>
    </div>
  );
};

export default QueryPanel;
