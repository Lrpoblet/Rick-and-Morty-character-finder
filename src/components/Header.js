import Filters from './Filters';

function Header({ image, handleSubmit, setchangeNameFilter }) {
  return (
    <header className="text-align-center">
      <img
        className="card__img"
        src={image}
        alt="Rick and Morty"
        title="Rick and Morty"
      />
      <h1 className="title--big">Characters</h1>
      <Filters
        handleSubmit={handleSubmit}
        setchangeNameFilter={setchangeNameFilter}
      />
    </header>
  );
}

export default Header;
