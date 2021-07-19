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
    >
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
