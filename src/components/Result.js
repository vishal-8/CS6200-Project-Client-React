import React from 'react';
import Highlighter from "react-highlight-words";

export default class Result extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: this.props.location.state.index,
            result: this.props.location.state.result,
            searchQuery: this.props.location.state.searchQuery
        }
    }

    render() {
        console.log(this.state.index)
        console.log(this.state.result)
        console.log(this.state.searchQuery)
        let tokens = this.state.searchQuery.split(' ')
        return(
            <div>
              From: <Highlighter
                highlightClassName="MyrHighlightClass"
                searchWords={tokens}
                autoEscape={true}
                textToHighlight={this.state.result.from}
                />
              <br/>
              To: <Highlighter
                highlightClassName="MyrHighlightClass"
                searchWords={tokens}
                autoEscape={true}
                textToHighlight={this.state.result.to}
                />
              <br/>
              Subject: <Highlighter
                highlightClassName="MyrHighlightClass"
                searchWords={tokens}
                autoEscape={true}
                textToHighlight={this.state.result.subject}
                />
              <br/>
              cc:<Highlighter
                highlightClassName="MyrHighlightClass"
                searchWords={tokens}
                autoEscape={true}
                textToHighlight={this.state.result['x-cc']}
                />
              <br/>
              bcc: <Highlighter
                highlightClassName="MyrHighlightClass"
                searchWords={tokens}
                autoEscape={true}
                textToHighlight={this.state.result['x-bcc']}
                />
              <br/>
              Date: <Highlighter
                highlightClassName="MyrHighlightClass"
                searchWords={tokens}
                autoEscape={true}
                textToHighlight={this.state.result.date}
                />
              <br/><br/>

              <p>Date: <Highlighter
                  highlightClassName="MyrHighlightClass"
                  searchWords={tokens}
                  autoEscape={true}
                  textToHighlight={this.state.result.message_body}
                /></p>

            </div>
        )
    }
}
