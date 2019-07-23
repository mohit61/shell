import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFileAlt,
  faCamera,
  faVideo,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import PropTypes from "prop-types";

// actions
import { search, contentLoading, error } from "../../redux/actions/fetchData";

// components
import { Card } from "../components/Card";
// import Loading from "../components/Loading";
import Spinner from "../components/Spinner";
import { UploadInput } from "../atomic-components/UploadInput";
import { HeadingTwo, BodyOne } from "../atomic-components/text";

const options = [
  { value: "text", label: <FontAwesomeIcon icon={faFileAlt} /> },
  { value: "image", label: <FontAwesomeIcon icon={faCamera} /> },
  { value: "video", label: <FontAwesomeIcon icon={faVideo} /> }
];

function SearchInput(props) {
  return <div>I am broke</div>;
  // // // const accessibility = SearchInputCapabilities(props.user.role);
  // // console.log("accessibility ", accessibility);

  // const [selectedOption, setSelectedOption] = useState("text");
  // const [content_type, setContent_type] = useState([]);

  // const handleChange = e => {
  //   setSelectedOption(e.value);
  // };

  // const onSearch = e => {
  //   e.preventDefault();
  //   props.contentLoading();
  //   setTimeout(() => props.search(), 3000);
  //   contentLoading();
  // };

  // const displayResults = cards => {
  //   return cards.map(card => (
  //     <Card
  //       key={card.id}
  //       card={card}
  //       display={content_type.includes(card.type)}
  //     />
  //   ));
  // };

  // // useEffect(() => {
  // //   console.log("fired");
  // //   // return displayResults(props.fetch.data);
  // // }, [content_type]);

  // const checkboxToggle = e => {
  //   const new_list = content_type;
  //   if (new_list.includes(e)) {
  //     new_list.splice(new_list.indexOf(e), 1);
  //   } else {
  //     new_list.push(e);
  //   }
  //   setContent_type(new_list);
  // };

  // if (true) {
  //   return (
  //     <div>
  //       <div className="container search-box">
  //         <form className="search-form">
  //           <div className="form-inline">
  //             {/* <Select
  //               className="mr-2"
  //               placeholder={<FontAwesomeIcon icon={faFileAlt} />}
  //               value={selectedOption}
  //               onChange={handleChange}
  //               options={options}
  //             />
  //             {selectedOption === "text" ? (
  //               <div className="search-content">
  //                 <input
  //                   className="form-control mr-2"
  //                   type="text"
  //                   id="search-input"
  //                   placeholder="Search"
  //                 />
  //               </div>
  //             ) : selectedOption === "image" ? (
  //               <div className="search-content">
  //                 <UploadInput label="Upload Image" />
  //               </div>
  //             ) : (
  //               <div className="search-content">
  //                 <UploadInput label="Upload Video" />
  //               </div>
  //             )}
  //             <button
  //               className="btn search-btn ml-2"
  //               type="button"
  //               onClick={onSearch}
  //             >
  //               <FontAwesomeIcon icon={faSearch} color="#fff" />
  //             </button>
  //           </div> */}
  //             <div className="search-input">
  //               <div className="search-input-input">
  //                 <input type="text" placeholder="Enter Search Term" />
  //                 <HeadingTwo text="or" />
  //                 <button className="btn  btn-color-white-one">
  //                   <FontAwesomeIcon icon={faUpload} /> Upload File
  //                 </button>
  //               </div>

  //               <div className="search-input-checkbox">
  //                 <BodyOne text="include" />
  //                 <label className="checkbox-box">
  //                   <BodyOne text="text" />
  //                   <input
  //                     type="checkbox"
  //                     onClick={() => this.checkboxToggle("text")}
  //                   />
  //                   <span className="checkmark" />
  //                 </label>
  //                 <label className="checkbox-box">
  //                   <BodyOne text="image" />
  //                   <input
  //                     type="checkbox"
  //                     onClick={() => this.checkboxToggle("image")}
  //                   />
  //                   <span className="checkmark" />
  //                 </label>
  //                 <label className="checkbox-box">
  //                   <BodyOne text="video" />
  //                   <input
  //                     type="checkbox"
  //                     onClick={() => this.checkboxToggle("video")}
  //                   />
  //                   <span className="checkmark" />
  //                 </label>
  //               </div>
  //               <button
  //                 className="btn btn-color-primary-one text-white"
  //                 type="submit"
  //                 onClick={this.onFormSubmit.bind(this)}
  //               >
  //                 Search <FontAwesomeIcon icon={faSearch} color="#fff" />
  //               </button>
  //             </div>
  //           </div>
  //           <div className="form-inline mt-3">
  //             <label className="checkbox-box">
  //               text
  //               <input type="checkbox" onClick={() => checkboxToggle("text")} />
  //               <span className="checkmark" />
  //             </label>
  //             <label className="checkbox-box">
  //               image
  //               <input
  //                 type="checkbox"
  //                 onClick={() => checkboxToggle("image")}
  //               />
  //               <span className="checkmark" />
  //             </label>
  //             <label className="checkbox-box">
  //               video
  //               <input
  //                 type="checkbox"
  //                 onClick={() => checkboxToggle("video")}
  //               />
  //               <span className="checkmark" />
  //             </label>
  //           </div>
  //         </form>
  //       </div>
  //       <div className="search-result container mt-5">
  //         {/* empty cards for loading */}
  //         {/* {props.fetch.loading ? <Loading /> : null} */}
  //         {/* spinner for loading */}
  //         {props.fetch.loading ? <Spinner /> : null}
  //         <div className="card-columns">{displayResults([props.fetch])}</div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   props.error("Permission denied");
  //   return null;
  // }
}

SearchInput.propTypes = {
  data: PropTypes.array,
  search: PropTypes.func.isRequired,
  contentLoading: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  fetch: state.fetch,
  user: state.user
});

const SearchPage = connect(
  mapStateToProps,
  { search, contentLoading, error }
)(SearchInput);

export default SearchPage;