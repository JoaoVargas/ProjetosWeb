import { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm, fetchRandomMeals } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleRandomMeal = () => {
    setSearchTerm('');
    setText('');
    fetchRandomMeals();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText('');
    }
  };

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={text}
          placeholder='Search meal'
          className='form-input'
        />
        <button
          type='submit'
          className='btn'
        >
          Search
        </button>
        <button
          type='buttons'
          className='btn btn-hipster'
          onClick={handleRandomMeal}
        >
          Feeling lucky!
        </button>
      </form>
    </header>
  );
};

export default Search;
