import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <div> Header </div>
      </header>
      <nav className='nav'>
        <div>
          <a> About </a>
        </div>
        <div>
          <a> Services </a>
        </div>
        <div>
          <a> Industries </a>
        </div>
        <div>
          <a> Projects </a>
        </div>
        <div>
          <a> For clients </a>
        </div>
        <div>
          <a> Recognition </a>
        </div>
        <button> Get estimate</button>
      </nav>
      <div className='content'>
        <div>
          <img src='https://levelup.ua/wp-content/uploads/2019/10/anadea_2.jpg' />
        </div>
        <div>
          Avatar + description
        </div>
        <div>
          my posts
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
          <div>Post 4</div>
        </div>
      </div>

    </div>
  );
}


export default App;
