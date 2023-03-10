import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-bg text-center py-5">
      <div
        className=" fw-bold  fst-italic pt-3"
        style={{ color: "white", fontSize: "78px" }}
      >
        <NavLink to="/" className="text-decoration-none text-white">
          zomato
        </NavLink>
      </div>
      <div className="fs-2 pt-2" style={{ color: "white" }}>
        Discover the best food & drinks in Indore Indore
      </div>
      {/* <div>
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
