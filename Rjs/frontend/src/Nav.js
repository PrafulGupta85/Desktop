import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/logout">LogOut</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
