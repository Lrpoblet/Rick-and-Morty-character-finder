import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  const character = characters.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} />;
  });
  return (
    <section>
      <ul className="cards">{character}</ul>
    </section>
  );
};

export default CharacterList;
