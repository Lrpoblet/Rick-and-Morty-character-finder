function ResetFilters({ setchangeNameFilter, setchangeSpeciesFilter }) {
  function deleteFilterName() {
    setchangeNameFilter('');
    setchangeSpeciesFilter('all');
  }
  return (
    <input
      type="reset"
      value="Reset"
      className="form__btn"
      onClick={deleteFilterName}
    />
  );
}
export default ResetFilters;
