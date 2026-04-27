import Link from "next/link";
import Header from "./components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <h2>Welcome to my website!</h2>
          <p className="lede">This is where I will place the cool stuff I do.</p>
          <div className="actions">
            <Link className="button" href="/about-me">
              About me
            </Link>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Steven Luo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
