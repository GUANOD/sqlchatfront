import React, { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";
import styles from "./styles/Error.module.css";

export default function ErrorModal() {
  const [err, setErr] = useContext(ErrorContext);

  return (
    <div className={styles.container}>
      <p>{err}</p>
      <button autoFocus onClick={() => setErr("")}>
        OK
      </button>
    </div>
  );
}
