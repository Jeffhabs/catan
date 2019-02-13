import React from 'react';
import { createStyles } from '../../shared/theme/util';
import injectSheet, { WithSheet } from 'react-jss'

// width: 0;
// border-bottom: 30px solid #6C6;
// border-left: 52px solid transparent;
// border-right: 52px solid transparent;

// width: 104px;
// height: 60px;
// background-color: #6C6;

// width: 0;
// border-top: 30px solid #6C6;
// border-left: 52px solid transparent;
// border-right: 52px solid transparent;

const styles = () => createStyles({
  hex: {
    float: 'left',
    marginLeft: '3px',
    marginBottom: '-26px',
  },
  top: {
    width: 0,
    borderBottom: '30px solid #6C6',
    borderLeft: '52px solid transparent',
    borderRight: '52px solid transparent',
  },
  middle: {
    width: '104px',
    height: '60px',
    background: '#6C6',
  },
  bottom: {
    width: '0',
    borderTop: '30px solid #6C6',
    borderLeft: '52px solid transparent',
    borderRight: '52px solid transparent',
  },
  hexRow: {
      clear: 'left',
  },
  hexRowEven: {
    marginLeft: '53px',
  }
})

const Hexagon: React.SFC<WithSheet<typeof styles>> = ({classes}) => {
  return (
    <div className={classes.hexRow}>
      <div className={classes.hex}>
        <div className={classes.top} />
        <div className={classes.middle} />
        <div className={classes.bottom} />
      </div>
      <div className={classes.hex}>
        <div className={classes.top} />
        <div className={classes.middle} />
        <div className={classes.bottom} />
      </div>
      <div className={classes.hex}>
        <div className={classes.top} />
        <div className={classes.middle} />
        <div className={classes.bottom} />
      </div>
    </div>
  );
}

export default injectSheet(styles)(Hexagon);