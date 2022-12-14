import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import ResetFilters from './ResetFilters';

function Filters({
  handleSubmit,
  setchangeNameFilter,
  setchangeSpeciesFilter,
  nameFilter,
  speciesFilter,
}) {
  return (
    <form className="form__label" onSubmit={handleSubmit}>
      <FilterByName
        nameFilter={nameFilter}
        setchangeNameFilter={setchangeNameFilter}
      />
      <FilterBySpecies
        speciesFilter={speciesFilter}
        setchangeSpeciesFilter={setchangeSpeciesFilter}
      />
      <ResetFilters
        setchangeNameFilter={setchangeNameFilter}
        setchangeSpeciesFilter={setchangeSpeciesFilter}
      />
    </form>
  );
}

export default Filters;
