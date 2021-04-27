import React from 'react';
import Highlighter from "react-highlight-words";
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
        let tokens = this.state.searchQuery.split(' ')
        // console.log(tokens)
        return(
            <div>

                <ul className="list-group">
                    {this.state.results && this.state.results.length === 0 &&
                    <h4>
                       No matches found :(
                    </h4>
                    }
                    {this.state.results && this.state.results.length > 0 &&  <h4>Showing results for:   "{this.state.searchQuery}"</h4>}
                    {this.state.results && this.state.results.length > 0 && this.state.results.map((result, index) =>
                        <a onClick={() => {
                            this.props.history.push({
                                pathname: 'result' + `/${index}`,
                                // search: '?query=abc',
                                state: { index: index, result: result, searchQuery: this.state.searchQuery}
                            })
                        }}>
                            <div key={index}>

                                    {/*<Result index={index} result={result}/>*/}

                                    <li className="list-group-item"
                                        key={index}>
                                        {/*{result['subject']}*/}
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={tokens}
                                            autoEscape={true}
                                            textToHighlight={result['subject']}
                                        />
                                    </li>

                            </div>
                        </a>


                    )}
                </ul>
            </div>
        )
    }


}
