import React, {Component} from 'react';
import Home from "./Home.jsx";
import {navItems} from "../utils/constants.js";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";
const Switcher = ({currentPage}) => {

        switch (currentPage){
            case navItems[0]:
                return <Home/>
            case navItems[1]:
                return <AboutMe/>
            case navItems[2]:
                return <StarWars/>
            case navItems[3]:
                return <Contacts/>
        }

}

export default Switcher;