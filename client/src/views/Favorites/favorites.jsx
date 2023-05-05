import {useDispatch, useSelector} from "react-redux";
import {orderCards, filterCards, reset} from "../../redux/actions";
import Cards from "../../components/Cards/Cards.jsx"

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  function handleSort(e) {
    dispatch(orderCards(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
    <div>
      <select placeholder="Order" onChange={handleFilter}>
        {["Male", "Female", "unknown", "Genderless"].map((filter) => (
          <option value={filter}>{filter}</option>
        ))}
      </select>
      <select placeholder="gender" onChange={handleSort}>
        {["Ascendente", "Descendente"].map((filter) => (
          <option value={filter}>{filter}</option>
        ))}
      </select>
      <button value="reset" onClick={handleReset}>
        Reset
      </button>
      <Cards characters={favorites} />
    </div>
  );
}