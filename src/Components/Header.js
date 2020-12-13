import React, { Fragment } from "react";
import "../Stylesheets/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { useMediaQuery, Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { auth } from "../firebase";
const Header = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("triggred");
    setAnchorEl(null);
  };

  return (
    <nav className="header">
      {matches?(
        <Fragment>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon style={{ color: "#ffffff" }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClick={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {user ? (
                <Link className="header__link" to="/orders">
                  <div className="header__option" style={{ color: "black" }}>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                  </div>
                </Link>
              ) : (
                <Link className="header__link" to="/login">
                  <div className="header__option" style={{ color: "black" }}>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                  </div>
                </Link>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="header__link" to="/">
                <div className="header__option" style={{ color: "black" }}>
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
                </div>
              </Link>
            </MenuItem>
          </Menu>
        </Fragment>
      ):(<div></div>)}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Signout" : "Sign In"}
            </span>
          </div>
        </Link>
        {!matches? user ? (
          <Fragment>
            <Link className="header__link" to="/orders">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>
            <Link className="header__link" to="/">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link className="header__link" to="/login">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>
            <Link className="header__link" to="/">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Link>
          </Fragment>
        ):(<div></div>)}
        {user ? (
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__BasketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__BasketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Header;
