
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={"./test-page"}>Test Link</Link>
      </main>
    </div>
  );
}