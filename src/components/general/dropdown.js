import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render () {
        let options = null;
        if (this.props.data) {
            options = this.props.data.map(function (option) {

                let optionText = "";

                if (this.props.field) {
                    for (let field in option) {
                        optionText = option[field];
                    }
                } else {
                    optionText = option.name;
                }

                return (
                    <option
                    value={option.id}
                    key={option.id}
                    >
                    {optionText}
                    </option>
                );
            }, this);

        }

        return (
            <select
                ref='dropdown' id={this.props.name} name={this.props.name} className="form-control"
            defaultValue={this.props.defaultValue ? this.props.defaultValue : null}
            >
            {options}
            </select>
        );
    }

}

export default Dropdown;
