import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, nameFilter }) => {
  const renderCharacter = characters
    .sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    })
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })

    .map((eachCharacter) => {
      return (
        <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
      );
    });

  //poner mensaje si no encuentra ningún personaje

  return (
    <section>
      <ul className="cards">{renderCharacter}</ul>
    </section>
  );
};

export default CharacterList;
