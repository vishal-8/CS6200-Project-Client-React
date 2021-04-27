import React from 'react';
import { render } from 'react-dom';
import ResultsPage from "./ResultsPage";
import {searchPhrase} from "../services/SearchIndex";

const Result = ({results}) => {
    return results.map(r => <div>{r}</div>);
}

const Search = (props) => {
    const {
        searchQuery,
        onChange,
        search
    } = props;

    return <div>
        <input
            type="text"
            value={searchQuery}
            onChange={onChange}
            className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
        />
        <br/>
        <button type="button" class="btn btn-info" onClick={search}>Search</button>
    </div>;
}

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            results: [],
            submitted: false,
            refresh: false
        }

        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.refresh) {
            this.setState({
                submitted: false,
                refresh: false
            })
        }

    }


    onSearchQueryChange(e) {
        this.setState({searchQuery: e.target.value});
    }

    onSearch = () =>  {
        // Simulate AJAX call

        console.log(this.state.searchQuery)
        const res = searchPhrase(this.state.searchQuery).then(response => {
            console.log(response)
            this.setState({
                results: response.results,
                refresh: true
            })

            this.props.history.push({
                pathname: '/results',
                // search: '?query=abc',
                state: { results: response.results, searchQuery: this.state.searchQuery}
            })
        })


        // this.setState({
        //     results: res,
        //     submitted: true
        // })
        // setTimeout(() => {
        //     this.setState({results: [0, 1, 2, 3, 4], submitted: true})
        // }, 1000)
    }

    // handleSubmit = (event) =>  {
    //     alert('Search submitted')
    //     event.preventDefault();
    // }

    render() {
        const {results, searchQuery} = this.state;

        return <div>
            <Search
                searchQuery={searchQuery}
                onChange={this.onSearchQueryChange}
                search={this.onSearch}
            />
            {/*<Result results={results} />*/}
            {this.state.submitted && <ResultsPage results={results}/>}

        </div>;
    }
}

// render(<Container />, document.getElementById('root'));
