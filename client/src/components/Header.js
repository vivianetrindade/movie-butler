import React from 'react';
import { Link } from 'react-router-dom';
import magnify from '../magnifying-glass (1).png';
import butler from '../waiter (1).png';
import movie from '../movie.png';
import tv from '../television.png';

const Header = () => {
    return (
        <header className="App-header">
          
          <div className='app__title'>
            <h1>
              Movie Butler
            </h1>
            <img src={butler} className="App-logo" alt="logo" />
        </div>
        <nav className='navigation__icons'>
          <div className='navigation__icon'>
            <img className='magnify' src={magnify} alt='search'/>
            <Link to='/search'> Search </Link>
          </div>
          <div className='navigation__icon'>
            <img className='magnify' src={movie} alt='movies'/>
            <Link to='/movies'>Top Movies</Link>
          </div>
          <div className='navigation__icon'>
            <img className='tv__icon' src={tv} alt='television'/>
            <Link to='/series'>Top Tv Series</Link>
          </div>
          </nav>
        
      </header>
    );
}
export default Header;