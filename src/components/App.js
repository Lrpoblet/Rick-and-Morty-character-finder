import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import callToApi from '../services/api';

import image from '../images/Rick_and_Morty_title-transparent.png';
import '../styles/App.scss';
import Header from './Header';
import Loading from './Loading';
import CharacterList from './Characters/CharactersList';
import Footer from './Footer';
import CharacterDetail from './Characters/CharacterDetail';
import Filters from './Filters/Filters';
import PageNotFound from './PageNotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [genderFilter, setGenderFilter] = useState('all');

  useEffect(() => {
    setIsLoading(true);
    callToApi().then((cleanData) => {
      setCharacters(cleanData);
    });
    setIsLoading(false);
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const setchangeNameFilter = (value) => {
    setNameFilter(value);
  };

  const setchangeSpeciesFilter = (value) => {
    setSpeciesFilter(value);
  };

  const setchangeGenderFilter = (value) => {
    setGenderFilter(value);
  };

  const sortCharacters = characters.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const filteredCharacters = () => {
    return sortCharacters
      .filter((character) => {
        return character.name.toLowerCase().includes(nameFilter.toLowerCase());
      })
      .filter((character) => {
        return speciesFilter === 'all'
          ? true
          : character.species === speciesFilter;
      })
      .filter((character) => {
        return genderFilter === 'all'
          ? true
          : character.gender === genderFilter;
      });
  };

  const findCharacter = (id) => {
    return characters.find((character) => character.id === parseInt(id));
  };

  return (
    <div>
      <Header image={image} />
      <Loading isLoading={isLoading} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="text-align-center">
                <Filters
                  handleSubmit={handleSubmit}
                  setchangeNameFilter={setchangeNameFilter}
                  setchangeSpeciesFilter={setchangeSpeciesFilter}
                  nameFilter={nameFilter}
                  speciesFilter={speciesFilter}
                  setchangeGenderFilter={setchangeGenderFilter}
                  genderFilter={genderFilter}
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
