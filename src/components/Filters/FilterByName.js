function FilterByName({ nameFilter, setchangeNameFilter }) {
  function handleChangeFilterName(event) {
    setchangeNameFilter(event.target.value);
  }

  return (
    <input
      type="text"
      className="form__input-text "
      placeholder="E.g. Rick"
      onChange={handleChangeFilterName}
      value={nameFilter}
    />
  );
}
export default FilterByName;
