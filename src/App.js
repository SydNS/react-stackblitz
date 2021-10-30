import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <ul class="topnav">
        <li>
          <a class="active" href="Home.html">
            Home
          </a>
        </li>
        <li>
          <a href="Page1.html">Page1</a>
        </li>
        <li>
          <a href="Page2.html">Page2</a>
        </li>
        <li class="right">
          <a href="About.html">About</a>
        </li>
      </ul>
    </div>
  );
}
