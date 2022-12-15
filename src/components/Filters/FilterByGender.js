function FilterByGender({ genderFilter, setchangeGenderFilter }) {
  function handleChangeFilterGender(event) {
    setchangeGenderFilter(event.target.value);
  }

  return (
    <select
      name="gender"
      id="gender"
      className="form__input-text"
      onChange={handleChangeFilterGender}
      value={genderFilter}
    >
      <option value="all">All genders</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="Unknown">Unknown</option>
    </select>
  );
}

export default FilterByGender;
