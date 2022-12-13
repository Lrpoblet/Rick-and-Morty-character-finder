const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          location: character.location,
          image: character.image,
          url: character.url,
          episodes: character.episode.length,
        };
      });
      return cleanData;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default callToApi;
