import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    height: 'calc(100vh - var(--header-height))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorDataField: {
    marginBottom: '1rem',
  },
}));

export default useStyles;
