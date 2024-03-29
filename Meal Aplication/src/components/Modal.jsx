import { useGlobalContext } from '../context';

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className='modal-overlay'>
      <div className='modal-outside' onClick={closeModal}></div>
      <div className='modal-container' >
        <img
          src={image}
          className='img modal-img'
          alt={title + ' meal thumb'}
        />
        <div className='modal-content'>
          <h4>{title}</h4>
          <p>Cooking instructions:</p>
          <p>{text}</p>
          <a
            href={source}
            target='_blank'
          >
            Original source
          </a>
          <button
            className='btn btn-hipster close-btn'
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
