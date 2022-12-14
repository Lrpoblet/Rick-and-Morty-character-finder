import CharacterCard from './CharacterCard';
import notfound from '../../images/not-found.jfif';

const CharacterList = ({ filteredCharacters, nameFilter }) => {
  const htmlCharacter = filteredCharacters.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });

  const notFound = (
    <div>
      <p className="not-found__text">
        There is no character that matches the word {nameFilter}.
      </p>
      <img className="not-found__img" src={notfound} alt="not found" />
    </div>
  );

  return (
    <section>
      <ul className="cards">
        {htmlCharacter.length === 0 ? notFound : htmlCharacter}
      </ul>
    </section>
  );
};

export default CharacterList;
