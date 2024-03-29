import { useGlobalContext } from '../context';
import { BsHandThumbsUp } from 'react-icons/bs';

const Meals = () => {
  const { loading, meals, searchTerm, selectMeal, addToFavorites } =
    useGlobalContext();

  if (loading) {
    return (
      <section className='section'>
        <h4>Loading...</h4>
      </section>
    );
  } else if (meals.length < 1) {
    return (
      <section className='section'>
        <h4>
          No meals matched your search term '{searchTerm}'. Please try again.
        </h4>
      </section>
    );
  } else {
    return (
      <section className='section-center'>
        {meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
          return (
            <article
              key={idMeal}
              className='single-meal'
            >
              <img
                src={image}
                className='img'
                alt={title + ` meal thumb`}
                onClick={() => selectMeal(idMeal)}
              />
              <footer>
                <h5>{title}</h5>
                <button
                  className='like-btn'
                  onClick={() => addToFavorites(idMeal)}
                >
                  <BsHandThumbsUp />
                </button>
              </footer>
            </article>
          );
        })}
      </section>
    );
  }
};

export default Meals;
