function Filters({ handleSubmit, setchangeNameFilter }) {
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
