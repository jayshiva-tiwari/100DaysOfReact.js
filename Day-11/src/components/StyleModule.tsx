import React from "react";
import styles from "../styles/StyleModule.module.css";

const ModuleStyled: React.FC = () => {
  return <div className={styles.moduleBox}>This is styled with CSS Modules</div>;
};

export default ModuleStyled;
