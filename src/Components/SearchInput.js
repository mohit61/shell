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
      selectedOption: "image"
    };
  }

  handleChange(e) {
    console.log(e);
    this.setState({ selectedOption: e.value });
    console.log(`Option selected:`, this.state.selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="container search-box mx-auto mt-5">
        <form className="form-inline search-form">
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
                <input className="custom-file-input" type="file" id="myfile" />
                <label className="custom-file-label p-auto" htmlFor="myfile">
                  Upload Image
                </label>
              </div>
            </div>
          ) : (
            <div className="search-content">
              <div className="custom-file ">
                <input className="custom-file-input" type="file" id="myfile" />
                <label className="custom-file-label" htmlFor="myfile">
                  Upload Video
                </label>
              </div>
            </div>
          )}
          <button className="btn search-btn ml-2" type="button">
            <FontAwesomeIcon icon={faSearch} color="#fff" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchInput;
