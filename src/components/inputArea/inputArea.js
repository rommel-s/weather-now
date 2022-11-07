import { BsSearch } from "react-icons/bs";

import styles from "./inputArea.module.css";

const InputArea = ({ handleChange, location, handleClick }) => {
  return (
    <div className={styles.inputArea}>
      <label>Procurar</label>
      <input
        placeholder={"Procurar..."}
        onChange={handleChange}
        value={location}
      />
      <button onClick={handleClick} className={styles.searchBtn}>
        <BsSearch />
      </button>
    </div>
  );
};

export default InputArea;
