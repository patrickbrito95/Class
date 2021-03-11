import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat < 0 ? "Summer" : "Winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const iconName = season === "Summer" ? "sun" : "snowflake";

  return (
    <h1>
      {season === "Summer" ? (
        <div>
          <i className={`${iconName} icon`} />
          <h1>Bora para praia!!!</h1>
          <i className={`${iconName} icon`} />
        </div>
      ) : (
        <div>
          <i className={`${iconName} icon`} />
          <h1>Ixii, ta frio. Quero uma Sopa</h1>
          <i className={`${iconName} icon`} />
        </div>
      )}
    </h1>
  );
};

export default SeasonDisplay;
