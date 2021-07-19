import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  spinnerOverlay: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  fullHeight: {
    height: '100vh',
  },
  normalHeight: {
    height: 'calc(100% - var(--header-height))',
  },
  spinner: {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    border: `3px solid rgba(195, 195, 195, 0.6)`,
    borderRadius: '50%',
    borderTopColor: theme.palette.text.primary,
    animation: '$spin 1s ease-in-out infinite',
  },
  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));
