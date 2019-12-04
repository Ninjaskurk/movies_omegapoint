import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "@app/App.css";
import NavBar from "@comp/NavBar";
import ListBox from "@comp/ListBox";
import EditMovie from "@comp/EditMovie";
                                                                       
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <NavBar className="item"/>
                    <ListBox className="item"/>
                    {popup && popup.toggle && (
                        <EditMovie/>
                     )}
                </div>
            </div>
        );
    }
}

export default hot(module)(App);