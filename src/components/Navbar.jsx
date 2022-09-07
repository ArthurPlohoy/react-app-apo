import React from 'react';
import navbar from './Navbar.module.css';

const Navbar = () => {
    return <nav className={navbar.nav}>
        <div className={navbar.item}>
            <a> About </a>
        </div>
        <div className={navbar.item}>
            <a> Services </a>
        </div>
        <div className={navbar.item}>
            <a> Industries </a>
        </div>
        <div className={navbar.item}>
            <a> Projects </a>
        </div>
        <div className={navbar.item}>
            <a> For clients </a>
        </div>
        <div className={navbar.item}>
            <a> Recognition </a>
        </div>
        <button>Get estimate</button>
    </nav>
}

export default Navbar;