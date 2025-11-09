// src/components/Section/Section.tsx
import React, { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ title, children, style }) => (
  <section className={styles.section} style={style}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

export default Section;
