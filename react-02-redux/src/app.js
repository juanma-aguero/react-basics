import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import simpleStore from './stores/simple';


import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


class BasicsApp extends React.Component {
  render() {
    return (
      <Provider store={simpleStore}>
        <div>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </Provider>
    );
  }
}


ReactDOM.render(
  <BasicsApp/>,
  document.getElementById('root')
);
