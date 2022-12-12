const CharacterCard = ({ eachCharacter }) => {
  return (
    <article className="card text-align-center">
      <img src={eachCharacter.image} alt="" className="card__img" />
      <h2 className="card__title">{eachCharacter.name}</h2>
      <p className="card__description">{eachCharacter.species}</p>
    </article>
  );
};

export default CharacterCard;
