import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
} from 'recharts';

import {
  handleTooltipFormat,
  handleTooltipLabelFormat,
  handleXAxisTickFormat,
  handleYAxisTickFormat,
} from '../../shared/utils/recharts';
import Strings from '../../shared/constants/strings';

const AppLineChart = ({
  data,
  xKey,
  yKey,
  xAxisInterval,
  color,
  axesColor,
  tooltipColor,
}) => (
  <ResponsiveContainer width='100%' height='100%'>
    <LineChart
      data={data}
      margin={{ top: 40, bottom: 40, right: 20, left: 25 }}
    >
      <XAxis
        dataKey={xKey}
        tickMargin={15}
        tickFormatter={handleXAxisTickFormat}
        interval={xAxisInterval}
        stroke={axesColor}
      >
        <Label
          position='bottom'
          value={Strings.CHART.XAXIS_LABEL}
          stroke={axesColor}
          offset={20}
        />
      </XAxis>
      <YAxis
        domain={['auto', 'auto']}
        tickFormatter={handleYAxisTickFormat}
        stroke={axesColor}
      >
        <Label
          position='insideLeft'
          value={Strings.CHART.YAXIS_LABEL}
          stroke={axesColor}
          angle={-90}
          offset={-15}
        />
      </YAxis>
      <Tooltip
        labelFormatter={handleTooltipLabelFormat}
        formatter={handleTooltipFormat}
        contentStyle={{ backgroundColor: `${axesColor}` }}
        cursor={{ stroke: `${axesColor}` }}
        labelStyle={{ fontWeight: 'bold', color: `${tooltipColor}` }}
        itemStyle={{ fontWeight: 'bold', color: `${tooltipColor}` }}
      />
      <Line dataKey={yKey} stroke={color} strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default AppLineChart;
