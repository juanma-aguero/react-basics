import React from 'react';
import Dropdown from '../general/dropdown';

const options = [{id:1, name:"Option 1"}, {id:2, name:"Option 2"}];

class EjemploDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    render(){
        return (
        <div>
            <h3>Dropdown</h3>
            <Dropdown
                name="dropdown-example"
                data={options}
            />

            <div className="result-box">
                Valor: {this.state.value}
            </div>

        </div>
        )
    }
}

export default EjemploDropdown;
