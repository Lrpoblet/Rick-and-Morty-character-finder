import CharacterCard from './CharacterCard';

const CharacterList = ({ filteredCharacters }) => {
  const htmlCharacter = filteredCharacters.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });

  //poner mensaje si no encuentra ningún personaje

  return (
    <section>
      <ul className="cards">{htmlCharacter}</ul>
    </section>
  );
};

export default CharacterList;
