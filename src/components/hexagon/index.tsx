import React from 'react';
import { createStyles } from '../../shared/theme/util';
import cn from 'classnames';
import injectSheet, { WithSheet } from 'react-jss'

const styles = () => createStyles({
  hexagon: {
    overflow: 'hidden',
    visibility: 'hidden',
    WebkitTransform: 'rotate(120deg)',
    MozTransform: 'rotate(120deg)',
    MsTransform: 'rotate(120deg)',
    OTransform: 'rotate(120deg)',
    transform: 'rotate(120deg)',
  },
  hexagonIn1: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    WebkitTransform: 'rotate(-60deg)',
    MozTransform: 'rotate(-60deg)',
    MsTransform: 'rotate(-60deg)',
    OTransform: 'rotate(-60deg)',
    transform: 'rotate(-60deg)',
  },
  hexagonIn2: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundImage: 'url(http://placekitten.com/240/240)',
    visibility: 'visible',
    WebkitTransform: 'rotate(-60deg)',
    MozTransform: 'rotate(-60deg)',
    MsTransform: 'rotate(-60deg)',
    OTransform: 'rotate(-60deg)',
    transform: 'rotate(-60deg)',
  },
  hexagon1: {
    width: 400,
    height: 200,
    margin: '0 0 0 -80px',
  }
})

const Hexagon: React.SFC<WithSheet<typeof styles>> = ({classes}) => {
  return (
    <div className={cn(classes.hexagon, classes.hexagon1)}>
      <div className={classes.hexagonIn1}>
        <div className={classes.hexagonIn2} />
      </div>
    </div>
  );
}

export default injectSheet(styles)(Hexagon);