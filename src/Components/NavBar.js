import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={props.myStyle}>
                <div className="container-fluid" style={props.myStyle}>
                    <Link className="navbar-brand" style={props.myStyle} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link style={props.myStyle} className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link style={props.myStyle} className="nav-link" to="/about">{props.about}</Link>
                            </li>
                            <li className="nav-item" >
                                <Link style={props.myStyle} className="nav-link" to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="d-flex float-end">
                        <button type="button" id='primary' onClick={props.toggleBtn} className="btn btn-lg btn-primary"></button>
                        <button type="button" id="secondary" onClick={props.toggleBtn} className="btn btn-lg btn-secondary"></button>
                        <button type="button" id="success" onClick={props.toggleBtn} className="btn btn-lg btn-success"></button>
                        <button type="button" id="danger" onClick={props.toggleBtn} className="btn btn-lg btn-danger"></button>
                        <button type="button" id="warning" onClick={props.toggleBtn} className="btn btn-lg btn-warning"></button>
                        <button type="button" id="info" onClick={props.toggleBtn} className="btn btn-lg btn-info"></button>
                        <button type="button" id="light" onClick={props.toggleBtn} className="btn btn-lg btn-light"></button>
                        <button type="button" id="dark" onClick={props.toggleBtn} className="btn btn-lg btn-dark"></button>
                    </div> */}
                    <div className={`form-check form-switch float-end text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBtn} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

NavBar.defaultProps = {
    title: 'Enter Title Here',
    about: 'Enter About Text Here'
};

export default NavBar
