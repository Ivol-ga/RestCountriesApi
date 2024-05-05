import React from "react";
import { Logo } from "../../Logo";

function Header() {
  return (
    <div className={"header header-wrapper"}>
      <div className="container header__menu">
        <Logo />
      </div>
    </div>
  );
}
export { Header };
