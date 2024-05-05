import React from "react";
import style from "../../../SASS/style.sass";
import Button from "@mui/material/Button";
import notFound from "./img/ic-notfound.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={"notFound"}>
      <img src={notFound} className={"image"} alt="" aria-hidden="true" />
      <h2 className={"notFound__title"}>Not found</h2>
      <Link to="/">
        <Button variant="contained"> Home page</Button>
      </Link>
    </div>
  );
}
export { NotFound };
