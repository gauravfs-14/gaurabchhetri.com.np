import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/gauravfs-14"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Built by Gaurab Chhetri.</span>
             </Link>
    </footer>
  );
}

export default Footer;
