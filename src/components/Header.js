function Header({ image }) {
  return (
    <header className="text-align-center">
      <img
        className="card__img"
        src={image}
        alt="Rick and Morty"
        title="Rick and Morty"
      />
    </header>
  );
}

export default Header;
