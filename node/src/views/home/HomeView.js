import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as SucculentAction from '../../actions/succulentAction'
import { Container, Card, CardContent, CardActions, Typography, Button,
   Box, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ImgDialog from '../../components/common/ImgDialog';
import SucculentBlock from '../../components/home/SucculentBlock';

const useStyles = (theme) => {
  console.log('theme :', theme);
  return {
    homeView: {
      paddingTop: 64,
    },
    container: {
      marginTop: theme.spacing(3),
    },
    imgBlockWrapper: {
      position: 'relative',
      width: '30%',
      '&+$imgBlockWrapper': {
        marginTop: theme.spacing(3)
      }
    }
  }
};

class HomeView extends Component {

  componentDidMount() {
    const { succulentAction } = this.props;
    succulentAction.getSucculents();
  }

  handleClickZoom = id => () => {
    const { succulentAction } = this.props;
    succulentAction.getSucculentById(id);
  }

  closeOverlay = id => () => {
    const { succulentAction } = this.props;
    succulentAction.closeOverlay(id);
  }

  render() {
    const { succulentCluster, succulent, classes } = this.props;
    return (
      <Box className={classes.homeView}>
        <Container className={classes.container} maxWidth="lg">
          {Object.values(succulentCluster).map((succulents, index) => (
            <SucculentBlock succulents={succulents} handleClick={this.handleClickZoom} key={index}></SucculentBlock>
          ))}
          {
            succulent && (
              <ImgDialog imgObj={succulent} close={this.closeOverlay}></ImgDialog>
            )
          }
        </Container>
      </Box>
    );
  }
}

HomeView.propTypes = {
  succulentCluster: PropTypes.object.isRequired,
  succulent: PropTypes.object,
  succulentAction: PropTypes.object
};

function mapStateToProps({ succulentReducer }) {
  return {
    succulentCluster: succulentReducer.succulentCluster,
    succulent: succulentReducer.succulent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    succulentAction: bindActionCreators(SucculentAction, dispatch)
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(withStyles(useStyles)(HomeView));
