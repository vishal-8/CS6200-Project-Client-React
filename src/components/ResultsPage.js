import React from 'react';
import { useLocation } from "react-router-dom";
import Result from "./Result";

export default class ResultsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: this.props.location.state.results,
            searchQuery: this.props.location.state.searchQuery
        }
    }


    render() {
        console.log(this.state.searchQuery)
        return(
            <div>
                <h2>Showing results for:   "{this.state.searchQuery}"</h2>
                <ul className="list-group">
                    {this.state.results && this.state.results.length === 0 &&
                    <h3>
                        Oops! No results found
                    </h3>
                    }
                    {this.state.results && this.state.results.map((result, index) =>
                        <a onClick={() => {
                            this.props.history.push({
                                pathname: 'result' + `/${index}`,
                                // search: '?query=abc',
                                state: { index: index, result: result}
                            })
                        }}>
                            <div key={index}>

                                    {/*<Result index={index} result={result}/>*/}

                                    <li className="list-group-item"
                                        key={index}>
                                        {result['subject']}
                                    </li>

                            </div>
                        </a>


                    )}
                </ul>
            </div>
        )
    }


}
