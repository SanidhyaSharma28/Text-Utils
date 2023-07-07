import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (

    <div>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.random}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.home}</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary mx-2 rounded" style={{width:'30px', height:'30px',cursor:'pointer' }}  onClick={()=>{props.colorChange('primary')}}></div>
            </div>
            <div className="d-flex">
              <div className="bg-warning mx-2 rounded" style={{width:'30px', height:'30px',cursor:'pointer' }}  onClick={()=>{props.colorChange('warning')}}></div>
            </div>
            <div className="d-flex">
              <div className="bg-success mx-2 rounded" style={{width:'30px', height:'30px', cursor:'pointer' }} onClick={()=>{props.colorChange('success')}}></div>
            </div>
            <div className="d-flex">
              <div className="bg-danger mx-2 rounded" style={{width:'30px', height:'30px', cursor:'pointer' }}  onClick={()=>{props.colorChange('danger')}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  random: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  random: 'Set random here',
  title: 'Set title here',
  home: 'HOME'
}