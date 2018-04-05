import React from 'react';
import {connect} from 'react-redux';

class EjemploTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <div>
                <h3>Text input</h3>
                <input
                    type="text"
                    placeholder="Text input"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div className="result-box">
                    Valor: {this.state.value}
                </div>

            </div>
        )
    }
}

export default EjemploTextInput;
