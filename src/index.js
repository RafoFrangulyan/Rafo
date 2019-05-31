import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header'
import List from './components/list/List'
import './index.css';

const App = () => {
  const title = 'React Coin';
  
  return (
    <div>
        <Header/>
        <List/>
        <h1>{title}</h1>
        <p>Up to date crypto currencies financial data</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
