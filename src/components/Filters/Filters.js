import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import ResetFilters from './ResetFilters';
import FilterByGender from './FilterByGender';

function Filters({
  handleSubmit,
  setchangeNameFilter,
  setchangeSpeciesFilter,
  nameFilter,
  speciesFilter,
  genderFilter,
  setchangeGenderFilter,
}) {
  return (
    <>
      <h1 className="title--superbig title--big">Search character:</h1>
      <form className="form__label" onSubmit={handleSubmit}>
        <FilterByName
          nameFilter={nameFilter}
          setchangeNameFilter={setchangeNameFilter}
        />
        <FilterBySpecies
          speciesFilter={speciesFilter}
          setchangeSpeciesFilter={setchangeSpeciesFilter}
        />
        <FilterByGender
          setchangeGenderFilter={setchangeGenderFilter}
          genderFilter={genderFilter}
        />
        <ResetFilters
          setchangeNameFilter={setchangeNameFilter}
          setchangeSpeciesFilter={setchangeSpeciesFilter}
          setchangeGenderFilter={setchangeGenderFilter}
        />
      </form>
    </>
  );
}

export default Filters;
