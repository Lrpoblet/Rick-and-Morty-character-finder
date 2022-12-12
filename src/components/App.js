import { useEffect, useState } from 'react';
// import {Route} from 'react-router-dom';
import callToApi from '../services/api';
// import ls from '../services/localStorage';

import image from '../images/Rick_and_Morty_title.png';
import '../styles/App.scss';
import CharacterList from './CharactersList';

function App() {
  // VARIABLES ESTADO
  const [characters, setCharacters] = useState([]);

  // USEEFFECT
  useEffect(() => {
    callToApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);
  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div>
      <header className="text-align-center">
        <img
          className="card__img"
          src={image}
          alt="Rick and Morty"
          title="Rick and Morty"
        />
        <h1 className="title--big">Rick and Morty characters</h1>
        <form action="" className="form__label">
          <input type="text" className="form__input-text " />
        </form>
      </header>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
