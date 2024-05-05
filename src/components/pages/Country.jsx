import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Spinner } from "../Spinner";
import { apiURL } from "../utils/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Country() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState("");
  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);
      if (!res.ok) throw new Error("Could not found a country!");
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error: ", error.message);
    }
  };

  useEffect(() => {
    getCountryByName();
  }, [countryName]);

  return (
    <div className="country__info__wrapper container">
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>

      {isLoading && !error && <Spinner />}
      {error && !isLoading && { error }}

      {country.map((country) => (
        <div className="country__info__container" key={country.name.official}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={country.flags.png}
                alt={country.name.common}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {country.subregion}
                </Typography>
                <h5>
                  Population:{" "}
                  <span>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </h5>
                <h5>
                  Region: <span>{country.region}</span>
                </h5>
                <h5>
                  Sub Region: <span>{country.subregion}</span>
                </h5>
                <h5>
                  Capital: <span>{country.capital}</span>
                </h5>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}

export { Country };
