import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <article className="card text-align-center">
      <Link to={`/character/${eachCharacter.id}`}>
        <img src={eachCharacter.image} alt="" className="card__img" />
        <h2 className="card__title">{eachCharacter.name}</h2>
        <p className="card__description">{eachCharacter.species}</p>
        {/* añadir un icono si el personaje está muerto */}
      </Link>
    </article>
  );
};

export default CharacterCard;
