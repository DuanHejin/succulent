import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  // IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade, withStyles } from '@material-ui/core/styles';
import keycode from 'keycode';
import * as SucculentAction from '../../actions/succulentAction'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class NavView extends Component {

  onSearchKeyUp = (event) => {
    if (event.keyCode === keycode('enter')) {
      const { succulentAction } = this.props;
      const searchTerm = event.target.value;
      succulentAction.getSucculentsByTag(searchTerm);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='navView'>
        <AppBar>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit">
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.title} variant="h6" noWrap>
              多肉日记
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="搜索..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onKeyUp={this.onSearchKeyUp} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    succulentAction: bindActionCreators(SucculentAction, dispatch)
  }
}

export default connect(
  null, mapDispatchToProps
)(withStyles(useStyles)(NavView));