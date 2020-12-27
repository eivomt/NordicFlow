import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

// import WindSymbol from '../assets/wind-asset'

class Home extends Component {

    render() {
        return(
            <div className="home-container">
                <div className="home">
                    <NavLink className="home-btn wind" to="/wind">
                        <p>Wind</p>
                        {/* <WindSymbol/> */}
                    </NavLink>

                    <NavLink className="home-btn hydrogen" to="/hydrogen">
                        <p>Hydrogen</p>
                    </NavLink>

                    <NavLink className="home-btn oil" to="/oil">
                        <p>Oil</p>
                    </NavLink>

                </div>
            </div>
        )
    }
}

export default Home