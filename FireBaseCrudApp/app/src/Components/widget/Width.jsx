import React from "react";
import "./widgt.scss";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Width = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">21277</span>
        <span className="link">see all uers</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Width;
