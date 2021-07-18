import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowChart as ShowChartIcon } from '@material-ui/icons';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { fetchIpcHistory } from '../../store/actions/ipc';
import { selectIpc, selectIpcHistory } from '../../store/selectors/ipc';
import Spinner from '../../components/Spinner';
import AppLineChart from '../../components/LineChart';
import AppAreaChart from '../../components/AreaChart';
import AreaChartIcon from '../../components/Icons/AreaChartIcon';
import { history, history2, history3 } from '../../services/ipc';
import { CHART } from '../../shared/constants';
import './styles.css';

const NUMBER_OF_SAMPLES = 10;

const ChartSelector = ({ selectedChart, onChartSelected }) => {
  return (
    <div className='chart-selector'>
      <ToggleButtonGroup
        value={selectedChart}
        exclusive
        onChange={onChartSelected}
        aria-label="chart"
      >
        <ToggleButton value={CHART.LINE} aria-label={CHART.LINE}>
          <ShowChartIcon />
        </ToggleButton>
        <ToggleButton value={CHART.AREA} aria-label={CHART.AREA}>
          <AreaChartIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

const Chart = ({ type, data, interval }) => {
  switch (type) {
    case CHART.LINE:
      return (
        <AppLineChart
          data={data}
          xKey="date"
          yKey="price"
          xAxisInterval={interval}
          color="#1e6091ff"
        />
      );
    case CHART.AREA:
      return (
        <AppAreaChart
          data={history}
          xKey="date"
          yKey="price"
          xAxisInterval={interval}
          color="#1e6091ff"
        />
      );
    default:
      return (
        <AppLineChart
          data={data}
          xKey="date"
          yKey="price"
          xAxisInterval={interval}
          color="#1e6091ff"
        />
      );
  }
};

const HomePage = () => {
  const { loading } = useSelector(selectIpc);
  // const history = useSelector(selectIpcHistory);
  const dispatch = useDispatch();
  const [selectedChart, setSelectedChart] = useState(CHART.LINE);
  const interval = Math.trunc(history.length / NUMBER_OF_SAMPLES);

  useEffect(() => {
    dispatch(fetchIpcHistory());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(selectedChart);
  // }, [selectedChart]);

  const handleChartSelection = (event, chart) => {
    if (chart) {
      setSelectedChart(chart);
    }
  };

  // if (loading) return <Spinner />;

  return (
    <div className="home-container">
      <ChartSelector selectedChart={selectedChart} onChartSelected={handleChartSelection} />
      <Chart type={selectedChart} data={history} interval={interval} />
    </div>
  );
};

export default HomePage;
