import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faDownload, faSync } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";

//actions
import { fetchPosts } from "../actions/fetchData";
//components
import { HeadingTwo } from "../reusableComponents/text/HeadingTwo";

//todo import from an external file;
const SHELL_SERVER_API_ENDPOINT = "http://13.233.110.23:8080/posts";

class PostsTable extends Component {
  constructor(props) {
    super(props);
    /**
     * consists of 2 state:
     * 1. data
     * 2. loading
     * 3. columns
     */
    this.state = {
      data: [],
      loading: true,
      columns: [
        {
          dataField: "type",
          text: "Title"
          // sort: true
        },
        {
          dataField: "filename",
          text: "Description",
          formatter: this.previewFormatter
        },
        {
          dataField: "tags",
          text: "Tags",
          // sort: true,
          filter: textFilter(),
          headerAlign: "center"
        },
        {
          dataField: "actions",
          text: "Actions"
          // sort: true
        }
      ]
    };

    this.refresh = this.refresh.bind(this);
  }

  previewFormatter(cell, row) {
    console.log('row');
    console.log(row);
    if(row.type=='image'){
      return(
        <img 
          src={`https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/bot-posts%2F${cell}?alt=media&token=88192814-45bb-4302-b409-b5c26e90390b`}
          style={imgStyle}
          alt='preview'
          ></img>
      )
    }else if(row.type=='video'){
      return(
        <video src={`https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/bot-posts%2F${cell}?alt=media&token=88192814-45bb-4302-b409-b5c26e90390b`}/>
      )
    }
    
  }

  componentDidMount() {
    console.log("mounted");
    const url = "http://13.233.110.23:8080/posts";
    console.log("props", this.props);
    this.props.fetchPosts(url);
    console.log("data", this.props.fetch.data);
  }

  refresh(){
    console.log('refreshing');
    this.props.fetchPosts(SHELL_SERVER_API_ENDPOINT);
  }

  //TODO : change this life cycle method.
 
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.fetch) {
  //     return {
  //       data: nextProps.fetch.data,
  //       loading: nextProps.fetch.loading
  //     };
  //   }
  //   else return null;
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevProps.fetch !== )
  // // }

  // rowEvents() {
  //   console.log("row");
  // }
  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        // console.log(e);
        // console.log(row);
        // console.log(rowIndex);
        const url = `/posts/${row.id}`;
        this.props.history.push(url);
      }
    };
    console.log("hello", this.state.data);
    return (
      <div className="container">
        {/* {//the color of posts in heading 2 is black , and in spec file posts title color is # #060D42;} */}
        <HeadingTwo text="Posts" />
        <div className="my-3">
          <button className="btn btn-sm btn-color-white-one mr-3">
            <FontAwesomeIcon icon={faUpload} /> Upload
          </button>
          <Button variant="light" 
            size="sm"
            onClick={this.refresh}
            >
            <FontAwesomeIcon icon={faSync} />
          </Button>
          <Button variant="color-primary-one" size="sm">
            <FontAwesomeIcon icon={faDownload} /> Download
          </Button>
        </div>
        <BootstrapTable
          striped
          hover
          keyField="id"
          data={this.props.fetch.data}
          columns={this.state.columns}
          filter={filterFactory()}
          pagination={paginationFactory()}
          rowEvents={rowEvents}
        />
      </div>
    );
  }
}

PostsTable.propTypes = {
  fetchPosts: PropTypes.func
};

const mapStateToProps = state => ({
  fetch: state.fetch
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPosts }
  )(PostsTable)
);


const imgStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'contain'
}