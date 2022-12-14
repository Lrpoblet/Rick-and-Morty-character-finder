import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import callToApi from '../services/api';

import image from '../images/Rick_and_Morty_title-transparent.png';
import '../styles/App.scss';
import Header from './Header';
import CharacterList from './Characters/CharactersList';
import Footer from './Footer';
import CharacterDetail from './Characters/CharacterDetail';
import Filters from './Filters';
import PageNotFound from './PageNotFound';

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

  const findCharacter = (id) => {
    return characters.find((character) => character.id === parseInt(id));
  };

  // HTML EN EL RETURN
  return (
    <div>
      <Header image={image} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="text-align-center">
                <h1 className="title--superbig title--big">
                  Search character:
                </h1>
                <Filters
                  handleSubmit={handleSubmit}
                  setchangeNameFilter={setchangeNameFilter}
                  nameFilter={nameFilter}
                />
                <CharacterList
                  filteredCharacters={filteredCharacters()}
                  nameFilter={nameFilter}
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/character/:id"
          element={
            <CharacterDetail
              findCharacter={findCharacter}
              characters={characters}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
