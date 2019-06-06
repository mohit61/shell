import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "text"
    };
  }

  onSelection(e) {
    this.setState({
      selectValue: e.target.value
    });
    console.log(this.state.selectValue);
  }

  render() {
    console.log(this.state.selectValue);
    return (
      <div className="container">
        <form className="form-inline">
          <select
            className="form-control mr-2"
            id="content-type"
            onChange={this.onSelection.bind(this)}
          >
            <option value="text">
              Text
              <FontAwesomeIcon icon={faSearch} />
            </option>
            <option value="image">Image &#xf1c8;</option>
            <option value="video">
              Video
              <FontAwesomeIcon icon={faImage} />
            </option>
          </select>
          <div className="search-content">
            <input
              className="form-control mr-2"
              type="text"
              id="search-input"
              placeholder="Search"
            />
            <button className="btn" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="custom-file search-content">
            <input className="custom-file-input" type="file" id="myfile" />
            <label className="custom-file-label" htmlFor="myfile">
              Upload Image
            </label>
          </div>
          <div className="custom-file search-content">
            <input className="custom-file-input" type="file" id="myfile" />
            <label className="custom-file-label" htmlFor="myfile">
              Upload Video
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
