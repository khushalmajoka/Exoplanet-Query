const UnqueriedDisplay = () => {
  return (
    <div className={`-z-10 text-center w-full flex flex-col items-center justify-center`}>
      <span className="font-bold p-10 text-lg">
        Exoplanets are planets outside the Solar System.
        <br />
        Here you can query{" "}
        <a
          className="text-blue-500 cursor-pointer"
          href="https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS"
          target="_blank"
          rel="noopener noreferrer"
        >
          NASA's Exoplanet Archive
        </a>{" "}
        and find the one you love the most.
      </span>
    </div>
  );
};

export default UnqueriedDisplay;
