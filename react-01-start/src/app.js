import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


class BasicsApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}


ReactDOM.render(
  <BasicsApp/>,
  document.getElementById('root')
);
