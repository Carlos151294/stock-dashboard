import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  headerContainer: {
    height: 'var(--header-height)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  navOptions: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
  },
  navOption: {
    height: '100%',
    padding: '10px 15px',
  },
  cursor: {
    cursor: 'pointer',
  },
  dflex: {
    display: 'flex',
  },
  inheritHeight: {
    fontSize: 'inherit',
  }
}));
