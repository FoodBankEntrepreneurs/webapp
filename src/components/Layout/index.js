import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {teal, pink} from '@material-ui/core/colors';
import Topbar from './Topbar';

const theme = createMuiTheme({
    palette: {
      primary: { main: teal[500] },
      secondary: { main: pink["A400"] },
    },
  });

export const Layout = ({children, ...props}) => {
    return(
        <MuiThemeProvider theme={theme}>
            <Topbar />
                {children}
        </MuiThemeProvider>
    );
}