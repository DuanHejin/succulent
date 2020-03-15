import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography,
  Box, GridList, GridListTile, GridListTileBar, IconButton
} from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import ImgBlock from '../common/ImgBlock';

const useStyles = (theme) => ({
  root: {
    "&+$root": {
      marginTop: theme.spacing(3),
    }
  },
  gridTitle: {
    paddingBottom: theme.spacing(1)
  },
  gridListRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: purple[50],
    textTransform: 'capitalize',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  }
});

class SucculentBlock extends Component {
  render() {
    const { succulents, handleClick, classes } = this.props;
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h3" className={classes.gridTitle}>
            {!!succulents.length && succulents[0].tag}
          </Typography>
          <Box className={classes.gridListRoot}>
            <GridList className={classes.gridList} cols={4}>
              {succulents.map((tile, index) => (
                <GridListTile key={index}>
                  <ImgBlock src={tile.path} alt={tile.name} scale />
                  <GridListTileBar
                    title={tile.created}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.name}`} onClick={handleClick(tile.id)} >
                        <ZoomInIcon className={classes.name}/>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

SucculentBlock.propTypes = {
  succulents: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withStyles(useStyles)(SucculentBlock);