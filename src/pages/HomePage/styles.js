import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  homeContainer: {
    height: 'calc(100% - var(--header-height))',
  },
  chartContainer: {
    height: 'calc(100% - var(--chart-toolbar-height))',
  },
  toolbarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbarCenter: {
    flexBasis: '57%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  toolbarRight: {
    marginLeft: 'auto',
  },
  iconSize: {
    fontSize: '1.5rem',
  }
}));

export default useStyles;
