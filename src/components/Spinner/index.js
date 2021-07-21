import useStyles from './styles';

const Spinner = ({ fullScreen }) => {
  const classes = useStyles();

  return (
    <div
      className={
        fullScreen
          ? `${classes.spinnerOverlay} ${classes.fullHeight}`
          : `${classes.spinnerOverlay} ${classes.normalHeight}`
      }
      data-testid='spinner'
    >
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
