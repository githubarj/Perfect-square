import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg"
import pic6 from "../assets/6.jpg"
import OfferingData from "./OfferingData";

import "./OfferingStyles.css";

const Offering = () => {
  return (
    <div className="offering" id="offering">
      <h1>Services we offer</h1>
      <p>we offer solar solurions and water drilling</p>

      <OfferingData
        className="first-desc"
        heading="Solar Solutions"
        text="Yes. We're always interested in improving this generator and one of
            the best ways to do that is to add new and interesting paragraphs to
            the generator. If you'd like to contribute some random paragraphs,
            please contact us "
        img1={pic1}
        img2={pic2}
      />

      <OfferingData
        className="first-desc-reverse"
        heading="Water Drilling"
        text="Yes. We're always interested in improving this generator and one of
            the best ways to do that is to add new and interesting paragraphs to
            the generator. If you'd like to contribute some random paragraphs,
            please contact us "
        img1={pic3}
        img2={pic4}
      />

      <OfferingData
        className="first-desc"
        heading="Construction"
        text="Yes. We're always interested in improving this generator and one of
            the best ways to do that is to add new and interesting paragraphs to
            the generator. If you'd like to contribute some random paragraphs,
            please contact us "
        img1={pic5}
        img2={pic6}
      />
    </div>
  );
};

export default Offering;
