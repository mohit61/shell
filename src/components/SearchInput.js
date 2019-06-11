import React, { Component } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFileAlt,
  faCamera,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

const options = [
  { value: "text", label: <FontAwesomeIcon icon={faFileAlt} /> },
  { value: "image", label: <FontAwesomeIcon icon={faCamera} /> },
  { value: "video", label: <FontAwesomeIcon icon={faVideo} /> }
];

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "false",
      selectedOption: "text"
    };
  }

  handleChange(e) {
    this.setState({ selectedOption: e.value });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <div className="container search-box mx-auto mt-5">
          <form className="search-form">
            <div className="form-inline">
              <Select
                className="mr-2"
                placeholder={<FontAwesomeIcon icon={faFileAlt} />}
                value={selectedOption}
                onChange={this.handleChange.bind(this)}
                options={options}
              />
              {this.state.selectedOption === "text" ? (
                <div className="search-content">
                  <input
                    className="form-control mr-2"
                    type="text"
                    id="search-input"
                    placeholder="Search"
                  />
                </div>
              ) : this.state.selectedOption === "image" ? (
                <div className="search-content">
                  <div className="custom-file  search-content">
                    <input
                      className="custom-file-input"
                      type="file"
                      id="myfile"
                    />
                    <label
                      className="custom-file-label p-auto"
                      htmlFor="myfile"
                    >
                      Upload Image
                    </label>
                  </div>
                </div>
              ) : (
                <div className="search-content">
                  <div className="custom-file ">
                    <input
                      className="custom-file-input"
                      type="file"
                      id="myfile"
                    />
                    <label className="custom-file-label" htmlFor="myfile">
                      Upload Video
                    </label>
                  </div>
                </div>
              )}
              <button className="btn search-btn ml-2" type="button">
                <FontAwesomeIcon icon={faSearch} color="#fff" />
              </button>
            </div>
            <div className="form-check-group form-inline mt-3">
              <div className="form-check">
                <label className="form-check-label mr-2">
                  <div className="test-check">
                    <input type="checkbox" className="test-check" />
                  </div>{" "}
                  text
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label mr-2">
                  <input type="checkbox" className="" /> image
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label mr-2">
                  <input type="checkbox" className="" /> video
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="search-result container mt-5">
          <div className="card-columns">
            <div className="card">
              <div className="card-body">
                <img
                  className="card-img"
                  src="https://source.unsplash.com/random/302x200"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <span className="badge badge-pill  mr-2">tag1</span>
                <span className="badge badge-pill  mr-2">tag two</span>
                <span className="badge badge-pill ">tag longer text</span>
              </div>
            </div>

            <div className="card text-white text-center">
              <img
                className="card-img"
                src="https://source.unsplash.com/random/1000x300"
                alt=""
              />
              <div className="card-footer">
                <span className="badge badge-pill  mr-2">tag1</span>
                <span className="badge badge-pill  mr-2">tag two</span>
                <span className="badge badge-pill ">tag longer text</span>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-header bg-dark text-white">लोक सभा</div>
              <div className="card-body">
                <div className="card-title"> लोक सभा</div>
                <div className="card-text">
                  <p>
                    Lok Sabha Elections to be held on 29th april in Rajasthan
                  </p>
                  <p className="text-muted">Navbharat Times Report</p>
                </div>
              </div>
              <div className="card-footer">
                <span className="badge   mr-2">tag1</span>
                <span className="badge  mr-2">tag two</span>
                <span className="badge  ">tag longer text</span>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe src="https://www.youtube.com/embed/hZFNVj505HQ" />
                </div>
              </div>
              <div className="card-body">
                <div className="card-title">Transfer Truth</div>
                <div className="card-text text-muted">Know more</div>
              </div>
              <div className="card-footer">
                <span className="badge badge-pill  mr-2">tag1</span>
                <span className="badge badge-pill  mr-2">tag two</span>
                <span className="badge badge-pill ">tag longer text</span>
              </div>
            </div>

            <div className="card text-white">
              <div className="card-body">
                <h4 className="card-title">
                  अमेरिका की इन 5 मशहूर हस्तियों का भारत से है बेहद खास नाता
                </h4>
                <p className="card-text">
                  नई दिल्ली: अमेरिका में भारतीय मूल की कई ऐसी मशहूर हस्तियां
                  हैं, जिन्होंने अपने क्षेत्र में काफी नाम कमाया और आज दुनिया भर
                  में मशहूर हैं। हालांकि इनके भारतीय मूल के बारे में कम ही लोगों
                  को पता है। तो यहां ऐसे ही पांच मशहूर सितारों से मिलिए, जिन्हें
                  लोग अक्सर अमेरिकी मूल का ही मान बैठते हैं-
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <div className="card-footer">
                <span className="badge   mr-2">tag1</span>
                <span className="badge  mr-2">tag two</span>
                <span className="badge ">tag longer text</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchInput;
