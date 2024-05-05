import React from "react";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function AllCountryList({ countries }) {
  return (
    <div className="cards">
      {countries?.map((country, index) => (
        <Link to={`/country/${country.name.common}`} key={index}>
          <div className="cards__wrapper" key={country.name.oficial}>
            <div className="cards__img">
              <img src={country.flags.png} alt="" height="140" />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="cards__text"
              >
                {country.name.common}
              </Typography>
              <h6 className="cards__text">
                {" "}
                Population: {new Intl.NumberFormat().format(country.population)}
              </h6>
              <h6 className="cards__text"> Region: {country.region}</h6>
              <h6 className="cards__text">Capital: {country.capital}</h6>
            </CardContent>
          </div>
        </Link>
      ))}
    </div>
  );
}
export { AllCountryList };
