import { createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffa000',
            main: '#fb8c00',
            dark: '#f57c00'
        },
        secondary: {
            light: red[700],
            main: red[800],
            dark: red[900]
        },
        text: {
            primary: '#ff9500',
            secondary: '#ffb54c',
            disabled: '#ffdfb1',
            hint: '#ffdfb1',
            icon: '#f36703'
        },
        background: {
            paper: '#424242',
            default: '#303030'
        }
    },
});

export default Theme;