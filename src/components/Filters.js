function Filters({ handleSubmit, setchangeNameFilter, nameFilter }) {
  function handleChangeFilterName(event) {
    setchangeNameFilter(event.target.value);
  }

  function deleteFilterName() {
    setchangeNameFilter('');
  }
  return (
    <form action="" className="form__label" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__input-text "
        onChange={handleChangeFilterName}
        value={nameFilter}
      />
      <input
        type="reset"
        value="Reset"
        className="form__btn"
        onClick={deleteFilterName}
      />
    </form>
  );
}

export default Filters;
