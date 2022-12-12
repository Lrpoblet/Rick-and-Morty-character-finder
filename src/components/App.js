import { useEffect, useState } from 'react';
// import {Route} from 'react-router-dom';
import callToApi from '../services/api';
// import ls from '../services/localStorage';

import image from '../images/Rick_and_Morty_title-transparent.png';
import '../styles/App.scss';
import CharacterList from './CharactersList';

function App() {
  // VARIABLES ESTADO
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  // USEEFFECT
  useEffect(() => {
    callToApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);

  // FUNCIONES HANDLER
  const handleFilterName = (ev) => {
    setNameFilter(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN
  return (
    <div className="body">
      <header className="text-align-center">
        <img
          className="card__img"
          src={image}
          alt="Rick and Morty"
          title="Rick and Morty"
        />
        <h1 className="title--big">Rick and Morty characters</h1>
        <form action="" className="form__label" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form__input-text "
            onChange={handleFilterName}
          />
        </form>
      </header>
      <main>
        <CharacterList characters={characters} nameFilter={nameFilter} />
      </main>
      <footer className="footer">
        <small>
          &copy;2022
          <a
            href="https://github.com/Lrpoblet"
            target="_blank"
            rel="noreferrer"
          >
            Lara R. Poblet
          </a>
        </small>
        <p>
          Data:
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://rickandmortyapi.com/
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
