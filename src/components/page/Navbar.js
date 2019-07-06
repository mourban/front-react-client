import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component{

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        localStorage.removeItem('userId');
        this.props.history.push('/');
    }

    render(){
        const newUserNavbar = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">
                        Registro
                    </Link>
                </li>
            </ul>
        )

        let hrefLink = '#';

        const userNavbar = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/add" className="nav-link">
                        Nuevo Usuario
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/list" className="nav-link">
                        Lista Usuarios
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/listTask" className="nav-link">
                        Lista Tareas
                    </Link>
                </li>
                <li className="nav-item">
                    <a href={hrefLink} onClick={this.logOut.bind(this)} className="nav-link">
                        Logout  
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-page"
                aria-controls="navbar-page"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar-page">
                    {localStorage.usertoken? userNavbar : newUserNavbar}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)