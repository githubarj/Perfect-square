import { Component } from "react";
import { Link } from "react-router-dom";
import "./OfferingStyles.css";


class OfferingData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>
            {this.props.text}
          </p>
          <Link to={this.props.link} className="link">See past work</Link>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}

export default OfferingData;
