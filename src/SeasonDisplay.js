import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "BORA PARA PRAIA!!!",
    iconName: 'sun'
  },
  winter: {
    text: "Ixii, ta frio... Quero uma SOPA!",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat < 0 ? "Summer" : "Winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  return (
    <h1>
      {season === "Summer" ? (
        <div className="summer">
          <i className={`sun-left huge ${seasonConfig.summer.iconName} icon`} />
          <h1>{seasonConfig.summer.text} </h1>
          <i className={`sun-right huge ${seasonConfig.summer.iconName} icon`} />
        </div>
      ) : (
        <div className="winter">
          <i className={`snow-left huge ${seasonConfig.winter.iconName} icon`} />
          <h1>{seasonConfig.winter.text}</h1>
          <i className={`snow-left huge ${seasonConfig.winter.iconName} icon`} />
        </div>
      )}
    </h1>
  );
};

export default SeasonDisplay;
