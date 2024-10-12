// import { useState, useEffect } from "react";

import React from "react";

const Header = () => {
  return (
    <header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          ry="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <path
          d="M6 12l4 4 8-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
      <h1>TODO</h1>
    </header>
  );
};

export default Header;
