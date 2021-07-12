import React from "react";
import "./header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "../services/StateProvider";
const Header = () => {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon.com" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header___optionLineOne"> hello Gent</span>
            <span className="header___optionLineTwo"> Sign in</span>
          </div>
        </Link>

        <Link  className="header__link">
          <div className="header__option">
            <span className="header___optionLineOne">Returns</span>
            <span className="header___optionLineTwo">&orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header___optionLineOne"> Your</span>
            <span className="header___optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__0ptionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
