import styles from "./Spinner.module.css";

const bars = Array(12).fill(0);

export function Spinner({
  color,
  size = 20,
}: {
  color: string;
  size?: number;
}) {
  return (
    <div
      className={styles.wrapper}
      style={{
        ["--spinner-size"]: `${size}px`,
        ["--spinner-color"]: color,
      }}
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div className={styles.bar} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
