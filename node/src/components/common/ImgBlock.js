import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';


const useStyle = theme => ({
  scale: {
    "&:hover": {
      transition: theme.transitions.create('transform'),
      transform: "scale(1.2)"
    }
  },
  img: {
    width: '100%'
  }
});

class ImgBlock extends Component {

  render() {
    const { src, alt, classes, scale } = this.props;
    const className = scale ? classnames(classes.scale) : "";
    return (
      <Box className={className}>
        <img className={classes.img} src={src} alt={alt} />
      </Box>
    );
  }
}

ImgBlock.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  scale: PropTypes.bool,
};

export default withStyles(useStyle)(ImgBlock);