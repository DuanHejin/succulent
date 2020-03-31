import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Box, Typography } from '@material-ui/core';

const useStyles = theme => ({
  root: {
    minHeight: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    backgroundColor: '#20232a',
  }
});

class FooterWrapper extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Box className={classes.root}>
        <Typography variant='h2'>Footer</Typography>
      </Box>
    );
  }
}

FooterWrapper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(useStyles)(FooterWrapper);