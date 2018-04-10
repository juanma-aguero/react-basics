import React from 'react';
import Dropdown from '../general/dropdown';

const options = [{id:1, name:"Option 1"}, {id:2, name:"Option 2"}];

class EjemploDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

    render(){
        return (
        <div>
            <h3>Dropdown</h3>
            <Dropdown
                name="dropdown-example"
                data={options}
                onChange={this.handleChange}
            />

            <div className="result-box">
                Valor: {this.state.value}
            </div>

        </div>
        )
    }
}

export default EjemploDropdown;
