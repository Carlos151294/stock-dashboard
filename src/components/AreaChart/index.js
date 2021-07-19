import {
  AreaChart,
  Area,
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

const AppAreaChart = ({
  data,
  xKey,
  yKey,
  xAxisInterval,
  color,
  axesColor,
  tooltipColor,
}) => (
  <ResponsiveContainer width='100%' height='100%'>
    <AreaChart
      data={data}
      margin={{ top: 40, bottom: 40, right: 20, left: 25 }}
    >
      <defs>
        <linearGradient id='MyGradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor={color} stopOpacity={0.8} />
          <stop offset='95%' stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
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
      <Area
        type='monotone'
        dataKey={yKey}
        stroke={color}
        strokeWidth='2'
        fill='url(#MyGradient)'
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default AppAreaChart;
