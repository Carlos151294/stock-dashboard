import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';

import { fetchIpcHistory } from '../../store/actions/ipc';
import { selectIpc, selectIpcHistory } from '../../store/selectors/ipc';
import Spinner from '../../components/Spinner';
import AppLineChart from '../../components/LineChart';
import AppAreaChart from '../../components/AreaChart';
import Toolbar from '../../components/Toolbar';
import { CHART } from '../../shared/constants';
import useStyles from './styles.js';

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
