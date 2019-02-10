import React from 'react';
import { createStyles } from './shared/theme/util';
import injectSheet,{ WithSheet, ThemeProvider } from 'react-jss';

const styles = () =>  createStyles({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 1px',
    position: 'relative',
  },
  content: {
    flex: '1 1 1px',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    padding: '0 10px',
  },
});

const theme = {
  colorPrimary: 'green'
}

const AppWrapper: React.SFC<WithSheet<typeof styles>> = ({ classes }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}


export default injectSheet(styles)(AppWrapper);
