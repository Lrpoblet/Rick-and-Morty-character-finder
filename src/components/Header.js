function Header({ image, handleSubmit, setchangeNameFilter }) {
  function handleChangeFilterName(event) {
    setchangeNameFilter(event.target.value);
  }
  return (
    <header className="text-align-center">
      <img
        className="card__img"
        src={image}
        alt="Rick and Morty"
        title="Rick and Morty"
      />
      <h1 className="title--big">Characters</h1>
      <form action="" className="form__label" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__input-text "
          onChange={handleChangeFilterName}
        />
      </form>
    </header>
  );
}

export default Header;
