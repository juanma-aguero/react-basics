import React from 'react';
import {connect} from 'react-redux';
import Dropdown from '../general/dropdown';
import * as simpleActions from '../../actions/simpleAction';

const options = [{id: 1, name: "Option 1"}, {id: 2, name: "Option 2"}];

class EjemploDropdown extends React.Component {

  render() {
    return (
      <div>
        <h3>Dropdown</h3>
        <Dropdown
          name="dropdown-example"
          data={options}
          onChange={this.props.handleChange}
        />

        <div className="result-box">
          Valor: {this.props.value}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.simple.dropdown_value,
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (value) => {
      dispatch(simpleActions.handleDropdownChange(value));
    },
  };
};

const EjemploDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EjemploDropdown);

export default EjemploDropdownContainer;
