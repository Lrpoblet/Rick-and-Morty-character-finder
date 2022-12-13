import CharacterCard from './CharacterCard';
// import notfound from '../images/not-found.jfif';

const CharacterList = ({ filteredCharacters, nameFilter }) => {
  const htmlCharacter = filteredCharacters.map((eachCharacter) => {
    console.log(filteredCharacters);

    if (filteredCharacters.length > 0) {
      return (
        <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
      );
    } else {
      // NO FUNCIONA
      return (
        <p>{`There is no character that matches the word ${nameFilter}.`}</p>
      );
    }
  });

  return (
    <section>
      <ul className="cards">{htmlCharacter}</ul>
    </section>
  );
};

export default CharacterList;
