import "./TraitsStyles.css";
import TraitsData from "./TraitsData";

import trait1 from "../assets/trait1.jpg";
import trait2 from "../assets/trait2.jpg";
import trait3 from "../assets/trait3.jpg";

function Trait() {
  return (
    <div className="trait">
      <h1>WHAT MAKES US UNIQUE</h1>
      <p>
        We are a Property Development Company that is committed to the
        respectful, thoughtful development of living areas.Our development
        provides privacy, space, amenities, and preserves the natural beauty of
        land.
      </p>
      <div className="traitcard">
        <TraitsData
          image={trait1}
          heading="EXPERT CONTRACTORS"
          text="We engage a pool of professionals with
specialized knowledge, experience and
dedication whose activities are well coordinated
to avoid waste excessive costs and delays."
        />

        <TraitsData
          image={trait2}
          heading="PROFESSIONAL SERVICE"
          text="At Perfect Square we partner and walk with you in your journey by listening to your needs, wants, situation, fears and expectation."
        />

        <TraitsData
          image={trait3}
          heading="EXPERIENCE PORTFOLIO"
          text="Perfect Square is experienced, stable, dependable and reliable with outstanding customer service in the forefront of our building process"
        />
      </div>
    </div>
  );
}

export default Trait;
