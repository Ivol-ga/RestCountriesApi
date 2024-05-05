import React from "react";
import { AllCountryList } from "../../AllCountryList";

function Main({ countries }) {
  return (
    <div className="wrapper">
      <div className="content container">
        <AllCountryList countries={countries} />
      </div>
    </div>
  );
}
export { Main };
