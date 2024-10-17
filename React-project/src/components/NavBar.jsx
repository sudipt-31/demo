import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <div className="bg-[#4f001a] flex  justify-between  p-4 items-center mx-auto">
          <div className="flex items-center">
            <ul className="text-blue-600 flex gap-7 p-5 font-bold ">
              <Link to="/" className="text-red-300 hover:text-red-600">
                {props.name}
              </Link>
              <li>
                <Link to="/about" className="text-red-300 hover:text-red-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-red-300 hover:text-red-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/form" className="text-red-300 hover:text-red-600">
                  Form
                </Link>
              </li>
              <li>
                <Link to="/display" className="text-red-300 hover:text-red-600">
                  Form
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-red-400  bg-[#a12445] p-2  rounded-full flex">
            <span className="text-red-300 hover:text-red-600">Sign Up</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar