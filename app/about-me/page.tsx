import Header from "../components/header/header";

export default function AboutMe() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <h2>About Me</h2>
          <p className="lede">
            Hello! I&apos;m Steven Luo, an undergraduate at Rensselaer
            Polytechnic Institute studying Information Technology &amp; Web
            Science and Computer Science (Class of 2029).
          </p>
        </section>

        <section className="card">
          <h3>Hobbies</h3>
          <ul>
            <li>Making images using Blender</li>
            <li>Amateur photography</li>
            <li>Swimming recreationally</li>
            <li>Exploring new places on foot</li>
          </ul>
          <p className="muted">
            I may dedicate pages on my website to Blender and photography - I
            love crafting and capturing pretty scenes.
          </p>
        </section>

        <section className="card">
          <h3>Favorite Book Series</h3>
          <p>
            My favorite series is <em>Remembrance of Earth&apos;s Past</em> by
            Liu Cixin. I often revisit passages for the blend of big sci-fi
            ideas and human stories.
          </p>
          <p>
            <strong>The trilogy:</strong>
          </p>
          <ul>
            <li>Three-Body Problem</li>
            <li>The Dark Forest</li>
            <li>Death&apos;s End</li>
          </ul>
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
