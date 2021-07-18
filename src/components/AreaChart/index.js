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

const AppAreaChart = ({ data, xKey, yKey, xAxisInterval, color }) => (
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
      >
        <Label position='bottom' value='Time' offset={20} />
      </XAxis>
      <YAxis domain={['auto', 'auto']} tickFormatter={handleYAxisTickFormat}>
        <Label position='insideLeft' value='Price' angle={-90} offset={-15} />
      </YAxis>
      <Tooltip
        labelFormatter={handleTooltipLabelFormat}
        formatter={handleTooltipFormat}
        wrapperStyle={{
          borderColor: 'white',
          boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
        }}
        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
        labelStyle={{ fontWeight: 'bold', color: '#666666' }}
      />
      <Area
        type='monotone'
        dataKey={yKey}
        stroke={color}
        strokeWidth='2'
        fillOpacity='1'
        fill='url(#MyGradient)'
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default AppAreaChart;
