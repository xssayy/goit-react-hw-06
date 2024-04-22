import { useId } from "react";
import style from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  const id = useId();
  return (
    <div className={style.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
