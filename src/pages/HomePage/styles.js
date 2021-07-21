import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  homeContainer: {
    height: 'calc(100% - var(--header-height))',
  },
  chartContainer: {
    height: 'calc(100% - var(--chart-toolbar-height))',
  },
}));

export default useStyles;
