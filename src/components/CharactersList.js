import CharacterCard from './CharacterCard';

const CharacterList = ({ filteredCharacters }) => {
  const htmlCharacter = filteredCharacters.map((eachCharacter) => {
    //console.log(filteredCharacters.length);
    if (filteredCharacters.length !== 0) {
      return (
        <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
      );
    } else {
      // NO FUNCIONA
      return console.log('No hay coincidencias');
    }
  });

  return (
    <section>
      <ul className="cards">{htmlCharacter}</ul>
    </section>
  );
};

export default CharacterList;
