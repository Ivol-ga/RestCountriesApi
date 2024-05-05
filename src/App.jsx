import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Country } from "./components/pages/Country.jsx";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { Header } from "./components/layout/Header/Header.jsx";
import { Main } from "./components/layout/Main/Main.jsx";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Spinner } from "./components/Spinner.jsx";
import { apiURL } from "./components/utils/api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [setError] = useState();

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      <Routes>
        <Route
          path="/"
          element={<Main isLoading={isLoading} countries={countries} />}
        />
        <Route path="/country/:countryName" element={<Country />}></Route>
        <Route path="*" element={<NotFound isLoading={isLoading} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
