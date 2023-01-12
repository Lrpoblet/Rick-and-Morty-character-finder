function ResetFilters({
  setchangeNameFilter,
  setchangeSpeciesFilter,
  setchangeGenderFilter,
}) {
  function deleteFilterName() {
    setchangeNameFilter('');
    setchangeSpeciesFilter('all');
    setchangeGenderFilter('all');
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
