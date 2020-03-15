import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class SearchBox extends Component {
  render() {
    return (
      <div>
        here is search box
      </div>
    );
  }
}

SearchBox.propTypes = {
  search: PropTypes.func,
};

export default connect(
  mapStateToProps,
)(SearchBox);