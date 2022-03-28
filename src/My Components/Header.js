/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="logo1.png" className="photo" />
        <a className="navbar-brand" href="/#"> {props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Items
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/#">Item Name</a></li>
                <li><a className="dropdown-item" href="/#">Price</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "Jigiriz Impex"
}

Header.propTypes = {
  title: PropTypes.string
}