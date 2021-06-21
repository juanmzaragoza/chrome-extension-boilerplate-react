import { createMuiTheme } from '@material-ui/core/styles';

/*const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: "blue!important",
        }
      }
    }
  }
});*/

const theme = createMuiTheme({});

theme.overrides = {
  ...theme.overrides,
  MuiIconButton: {
    ...theme.MuiIconButton,
    colorSecondary: {
      ...theme.colorSecondary,
      //backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: `${theme.palette.error.light}!important`,
      }
    },
  },
}

export default theme;