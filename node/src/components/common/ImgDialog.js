import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgBlock from './ImgBlock';
import { Dialog, Button, DialogActions, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = theme => ({
  dialogActions: {
    position: 'fixed',
    right: 0
  }
});

class ImgDialog extends Component {
  render() {
    const { imgObj, close, classes } = this.props;
    return (
      <Dialog
        open={!!imgObj}
        onEscapeKeyDown={close(imgObj.id)}
        onBackdropClick={close(imgObj.id)}
        fullScreen
        maxWidth="lg"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions className={classes.dialogActions}>
          <Button variant="text" onClick={close(imgObj.id)} color="default" autoFocus>
            <CloseIcon />
          </Button>
        </DialogActions>
        <ImgBlock src={imgObj.path} alt={imgObj.name}></ImgBlock>
      </Dialog>
    );
  }
}

ImgDialog.propTypes = {
  imgObj: PropTypes.object,
  close: PropTypes.func,
};

export default withStyles(useStyles)(ImgDialog);