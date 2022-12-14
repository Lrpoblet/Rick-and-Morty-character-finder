function FilterBySpecies({ speciesFilter, setchangeSpeciesFilter }) {
  function handleChangeFilterSpecies(event) {
    setchangeSpeciesFilter(event.target.value);
  }

  return (
    <select
      className="form__input-text"
      name="species"
      id="species"
      onChange={handleChangeFilterSpecies}
      value={speciesFilter}
    >
      <option value="all">All species</option>
      <option value="Human">Human </option>
      <option value="Alien">Alien </option>
    </select>
  );
}
export default FilterBySpecies;
