import React from 'react';
import EjemploDropdownContainer from './ejemplos/dropdown';
import EjemploTextInput from './ejemplos/textInput';

class Content extends React.Component {

  render() {
    return (
      <div id="content" >
        <h2>Ejemplos</h2>
        <div className="grid-container">
            <div className="grid-item">
                <EjemploDropdownContainer/>
            </div>
            <div className="grid-item">
                <EjemploTextInput/>
            </div>
        </div>
      </div>
    );
  }
}

export default Content;
