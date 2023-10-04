// solar section
import pic1 from "../assets/solar1.jpg";
import pic2 from "../assets/solar2.jpg";

// water drilling
import pic3 from "../assets/water2.jpg";
import pic4 from "../assets/water1.jpg";

// construction
import pic5 from "../assets/const1.jpg"
import pic6 from "../assets/const2.jpg"
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
        text="Go green and save money with our solar
power solutions. We offer a wide range of
solar panel systems that are designed to
provide clean, reliable, and cost-effective
energy for homes and businesses. Our
experienced technicians ensure that
your solar power system is customized
to meet your energy needs and budget.
Switch to solar power and enjoy the
benefits of reduced electricity costs,
energy independence, and a positive
impact on the environment."
        link="/solar"
        img1={pic1}
        img2={pic2}
      />

      <OfferingData
        className="first-desc-reverse"
        heading="Water Drilling"
        text="Secure your water supply and reduce your
dependence on municipal resources with
our borehole drilling services. Our company
specializes in the drilling and installation of
boreholes for both residential and commercial
properties. "
        link="/water"
        img1={pic3}
        img2={pic4}
      />

      <OfferingData
        className="first-desc"
        heading="Construction"
        text="Leading your construction projects to success
with our expert team of construction managers.
Our company specializes in managing and
delivering high-quality, efficient construction
projects on time and within budget. We have a
strong track record of successfully managing
a wide range of projects, from residential to
commercial and industrial. We pride ourselves
on providing exceptional service, meeting the
unique needs of each client, and ensuring
that your project is completed to the highest
standards. "
        link="/construction"
        img1={pic5}
        img2={pic6}
      />
    </div>
  );
};

export default Offering;
