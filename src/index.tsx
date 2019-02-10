import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './AppWrapper';
import { ThemeProvider } from 'react-jss';
import * as serviceWorker from './serviceWorker';


const theme = {
  primaryColor: 'green'
}
const App: React.SFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper />
    </ThemeProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
