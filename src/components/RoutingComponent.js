import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LandingPage from "./LandingPage";
import ResultsPage from "./ResultsPage";
import Result from "./Result";

class RoutingComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                <div >
                    <a href="http://localhost:3000/">
                        <button type="button"
                                className="btn btn-dark btn-lg">
                            Enron Email Search
                        </button>
                    </a>
                    <br/><br/>

                </div>

                <Router>
                    {/*<Link to="/login">Login</Link>*/}
                    {/*<br/>*/}
                    {/*<Link to="/register">Register</Link>*/}

                    <Route path="/"
                           exact={true}
                           render = {(props) =>
                               <LandingPage {...props}/>}/>

                    <Route path="/results"
                           exact={true}
                           render = {(props) =>
                               <ResultsPage {...props}/>}/>

                    {/*<Route path="/register"*/}
                    {/*       exact={true}*/}
                    {/*       render = {(props) =>*/}
                    {/*           <Result {...props}/>}/>*/}

                    <Route exact={true} path={`/result/:resId`}
                           render={(props) =>
                               <Result
                                   {...props}
                                   resId={props.match.params.resId}
                               />
                           }
                    />

                    {/*<Route path="/profile"*/}
                    {/*       exact={true}*/}
                    {/*       render = {(props) =>*/}
                    {/*           <ProfileComponent {...props}/>}/>*/}

                    {/*<Route path="/profile/favourites"*/}
                    {/*       exact={true}*/}
                    {/*       render = {(props) =>*/}
                    {/*           <ProfileFavouritesComponent {...props}/>}/>*/}



                </Router>

            </div>
        )
    }
}

export default RoutingComponent
