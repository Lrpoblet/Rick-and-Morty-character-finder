import { useEffect, useState } from 'react';
// import {Route} from 'react-router-dom';
import callToApi from '../services/api';
// import ls from '../services/localStorage';

import image from '../images/Rick_and_Morty_title-transparent.png';
import '../styles/App.scss';
import Header from './Header';
import CharacterList from './CharactersList';
import Footer from './Footer';

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

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const setchangeNameFilter = (value) => {
    setNameFilter(value);
  };

  const filteredCharacters = () => {
    return characters
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
      });
  };

  // HTML EN EL RETURN
  return (
    <div>
      <Header
        image={image}
        handleSubmit={handleSubmit}
        setchangeNameFilter={setchangeNameFilter}
      />
      <main>
        <CharacterList filteredCharacters={filteredCharacters()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
