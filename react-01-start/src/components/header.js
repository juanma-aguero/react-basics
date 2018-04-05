import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div id="header">
            <h1>Intro a React</h1>
            <ul className="list-horizontal">
                <li>Page 1</li>
                <li>Page 2</li>
            </ul>
        </div>
    );
  }
}

export default Header;
