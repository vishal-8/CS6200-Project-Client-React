import React from 'react';

export default class Result extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: this.props.location.state.index,
            result: this.props.location.state.result
        }
    }

    render() {
        console.log(this.state.index)
        console.log(this.state.result)
        return(
            <div>
              From: {this.state.result.from}
              <br/>
              To: {this.state.result.to}
              <br/>
              Subject: {this.state.result.subject}
              <br/>
              cc:{this.state.result['x-cc']}
              <br/>
              bcc: {this.state.result['x-bcc']}
              <br/>
              Date: {this.state.result.date}
              <br/><br/>

              <p>{this.state.result.message_body}</p>

            </div>
        )
    }
}
