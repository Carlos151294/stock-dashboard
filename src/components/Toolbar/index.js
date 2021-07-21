import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ShowChart as ShowChartIcon } from '@material-ui/icons';

import { CHART } from '../../shared/constants';
import Strings from '../../shared/constants/strings';
import { toggleTheme } from '../../store/actions/ipc';
import { selectTheme } from '../../store/selectors/ipc';
import AreaChartIcon from '../../components/Icons/AreaChartIcon';
import useStyles from './styles';

const Toolbar = ({ selectedChart, onChartSelected }) => {
  const classes = useStyles();
  const isDark = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => dispatch(toggleTheme());

  return (
    <div className={classes.toolbarContainer}>
      <div className={classes.toolbarCenter}>
        <ToggleButtonGroup
          value={selectedChart}
          exclusive
          onChange={onChartSelected}
          aria-label='chart'
        >
          <ToggleButton value={CHART.LINE} aria-label={CHART.LINE}>
            <ShowChartIcon className={classes.iconSize} />
          </ToggleButton>
          <ToggleButton value={CHART.AREA} aria-label={CHART.AREA}>
            <AreaChartIcon className={classes.iconSize} />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={classes.toolbarRight}>
        <FormControlLabel
          control={
            <Switch
              checked={isDark}
              onChange={handleThemeChange}
              color='primary'
              name='theme'
            />
          }
          label={Strings.HOME.TOOLBAR.SWITCH_LABEL}
        />
      </div>
    </div>
  );
};

export default Toolbar;
