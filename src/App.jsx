import logo from './logo.png';

export default function App() {
  return (
    <div>
      <header className="hero">
        <img src={logo} alt="Zach Schulz for Harford County Council" className="logo" />
        <h1>Zach Schulz for Harford County Council, District C</h1>
        <p>Building a Smarter, Stronger Harford County for Our Families</p>
      </header>

      <section id="meet">
        <h2>Meet Zach</h2>
        <p>
          A lifelong Harford County resident, husband, father of two, and systems engineer,
          Zach brings data-driven, common-sense leadership to local government. He’s running
          to make Harford County a place where every family can thrive.
        </p>
      </section>

      <section id="issues">
        <h2>Key Issues</h2>
        <ul>
          <li><strong>Education:</strong> Invest in schools and support teachers.</li>
          <li><strong>Infrastructure:</strong> Fix roads, improve safety, and plan smart growth.</li>
          <li><strong>Local Jobs:</strong> Empower small businesses and bring good jobs home.</li>
          <li><strong>Fiscal Responsibility:</strong> Use data to guide smart spending.</li>
          <li><strong>Community:</strong> Keep Harford County family-focused and connected.</li>
        </ul>
      </section>

      <section id="get-involved">
        <h2>Get Involved</h2>
        <p>Join the campaign and help make a difference!</p>
        <button>Volunteer</button>
        <button>Request a Yard Sign</button>
      </section>

      <section id="donate">
        <h2>Donate</h2>
        <p>Your contributions help reach voters, print materials, and host community events.</p>
        <button>Donate Now</button>
      </section>

      <footer>
        <p>Contact: ZachSchulzForHarford@gmail.com</p>
        <p>Authorized by Zach Schulz for Harford, Megan Schulz, Treasurer.</p>
      </footer>
    </div>
  );
}
