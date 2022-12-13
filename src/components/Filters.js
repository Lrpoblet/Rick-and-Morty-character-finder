function Filters({ handleSubmit, setchangeNameFilter }) {
  function handleChangeFilterName(event) {
    setchangeNameFilter(event.target.value);
  }
  return (
    <form action="" className="form__label" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__input-text "
        onChange={handleChangeFilterName}
      />
    </form>
  );
}

export default Filters;
