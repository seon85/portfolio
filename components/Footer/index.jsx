import styles from '@/styles/style.module.scss';

export default function footer() {
  let now = new Date();
  let year = now.getFullYear();
  return (
    <>
      <footer className="footer">© {year} copyright all right reserved</footer>
    </>
  );
}
