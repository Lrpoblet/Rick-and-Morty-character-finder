import { useParams, Link } from 'react-router-dom';
import ls from '../services/localStorage';

const CharacterDetail = ({ findCharacter }) => {
  ls.get('characterList');
  const params = useParams();

  const characterFound = findCharacter(params.id);

  return (
    <div className="modal">
      <section className="modal__content">
        <div className="modal__header">
          <h2 className="title--big title--superbig">{characterFound.name}</h2>
          <Link className="form__btn" to="/">
            Return
          </Link>
        </div>

        <section className="modal__section">
          <img
            className="modal__img"
            src={characterFound.image}
            alt={characterFound.name}
            title={characterFound.name}
          />
          <ul className="card__description">
            <li>
              <span className="bold-text">Species: </span>{' '}
              {characterFound.species}
            </li>
            <li>
              <span className="bold-text">Origin: </span>{' '}
              {characterFound.origin}
            </li>
            <li>
              <span className="bold-text">Episodes: </span>{' '}
              {characterFound.episodes}
            </li>
            <li>
              <span className="bold-text">Status: </span>{' '}
              {characterFound.status}
            </li>
            <li>
              <img
                src={
                  characterFound.status === 'Dead'
                    ? 'https://img.icons8.com/ios/50/null/killed-fish.png'
                    : null
                }
              />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default CharacterDetail;
