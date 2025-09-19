import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Menu from './card.jsx';
import './styles/search.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        //SEARCH FUNCTIONALITY TO BE IMPLEMENTED

        console.log('Searching for:', searchTerm);
    };

    return (
        <>
            <section className='search'>
                <div className='search-container'>
                    <p>Search For Your Favorite <span>Cocktail</span></p>
                    <form onSubmit={handleSearchSubmit} className='search-form'>
                        <div className='search-input-container'>
                            <input 
                                type="text" 
                                placeholder="Enter cocktail name..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className='search-input'
                            />
                            <button type="submit" className='search-button'>
                                <FaSearch />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            
            <section className='card-section'>
                <div className='card-header'>
                    <h1>
                        {searchTerm ? `Results for "${searchTerm}":` : 'All Cocktails:'}
                    </h1>
                </div>
                <div className='card-container'>
                    <Menu searchTerm={searchTerm} />
                </div>
            </section>
        </>
    );
};

export default Search;