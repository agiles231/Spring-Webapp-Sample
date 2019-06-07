import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to={"/"}>Home</Link>
                </div>
                <div>
                    <Link to={"/emails"}>Emails</Link>
                </div>
                <div>
                    <Link to={"/ints"}>Ints</Link>
                </div>
                <div>
                    <Link to={"/doubles"}>Doubles</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;