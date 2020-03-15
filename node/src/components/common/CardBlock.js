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
  }
});

class CardBlock extends Component {

  render() {
    const { src, alt, classes, scale } = this.props;
    const className = scale ? classnames(classes.scale) : "";
    return (
      <Box className={className}>
        {/* {succulents.map((succu, index) => (
            <Card variant="outlined" className={classes.imgBlockWrapper} key={index}>
              <CardContent>
                <ImgBlock src={succu.path} alt={succu.name} scale></ImgBlock>
                <Typography color="textSecondary">
                  {succu.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small" color="primary"
                  onClick={this.handleClickZoom(succu.id)}>Zoon In</Button>
              </CardActions>
            </Card>
          ))} */}
      </Box>
    );
  }
}

CardBlock.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  scale: PropTypes.bool,
};

export default withStyles(useStyle)(CardBlock);