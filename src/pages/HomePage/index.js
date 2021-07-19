import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowChart as ShowChartIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { fetchIpcHistory, toggleTheme } from '../../store/actions/ipc';
import {
  selectIpc,
  selectIpcHistory,
  selectTheme,
} from '../../store/selectors/ipc';
import Spinner from '../../components/Spinner';
import AppLineChart from '../../components/LineChart';
import AppAreaChart from '../../components/AreaChart';
import AreaChartIcon from '../../components/Icons/AreaChartIcon';
import { CHART } from '../../shared/constants';
import Strings from '../../shared/constants/strings';
import useStyles from './styles.js';

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

const Chart = ({
  type,
  data,
  interval,
  chartColor,
  axesColor,
  tooltipTextColor,
}) => {
  switch (type) {
    case CHART.LINE:
      return (
        <AppLineChart
          data={data}
          xKey='date'
          yKey='price'
          xAxisInterval={interval}
          color={chartColor}
          axesColor={axesColor}
          tooltipColor={tooltipTextColor}
        />
      );
    case CHART.AREA:
      return (
        <AppAreaChart
          data={data}
          xKey='date'
          yKey='price'
          xAxisInterval={interval}
          color={chartColor}
          axesColor={axesColor}
          tooltipColor={tooltipTextColor}
        />
      );
    default:
      return (
        <AppLineChart
          data={data}
          xKey='date'
          yKey='price'
          xAxisInterval={interval}
          color={chartColor}
          axesColor={axesColor}
          tooltipColor={tooltipTextColor}
        />
      );
  }
};

const HomePage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading } = useSelector(selectIpc);
  const history = useSelector(selectIpcHistory);
  const [selectedChart, setSelectedChart] = useState(CHART.LINE);
  const interval = Math.trunc(history.length / CHART.NUMBER_OF_SAMPLES);

  useEffect(() => {
    dispatch(fetchIpcHistory());
  }, [dispatch]);

  const handleChartSelection = (event, chart) => {
    if (chart) {
      setSelectedChart(chart);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className={classes.homeContainer}>
      <Toolbar
        selectedChart={selectedChart}
        onChartSelected={handleChartSelection}
      />
      <div className={classes.chartContainer}>
        <Chart
          type={selectedChart}
          data={history}
          interval={interval}
          chartColor={theme.palette.primary.main}
          axesColor={theme.palette.text.primary}
          tooltipTextColor={theme.palette.primary.contrastText}
        />
      </div>
    </div>
  );
};

export default HomePage;
