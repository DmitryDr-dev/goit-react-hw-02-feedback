import styles from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={styles?.section}>
      {title && <h2 className={styles?.section__title}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
