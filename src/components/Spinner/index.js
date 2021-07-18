import './styles.css';

const Spinner = ({ fullScreen }) => {
  return (
    <div className={fullScreen ? 'spinner-overlay full-height' : 'spinner-overlay normal-height'}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
