import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-5">
      <ul className="flex gap-x-5">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="mailto:saadcfi4@gmail.com">Contact</a>
        </li>
      </ul>

      <div className="right">
        <Link to="/">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExendxZGtqdTNwY2tvNDF0YzVtZWdiYW5hYnh6NHo4bGkzemVlNXJ5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/khLv6cbb0VoedBsiaF/giphy.gif"
            className="w-10 h-10  mix-blend-lighten"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
