import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
  Brush, 
  AreaChart,
  Area
} from 'recharts';

import {
  handleTooltipFormat,
  handleTooltipLabelFormat,
  handleXAxisTickFormat,
  handleYAxisTickFormat,
} from '../../shared/utils/recharts';

const AppLineChart = ({ data, xKey, yKey, xAxisInterval, color }) => (
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
      <Line dataKey={yKey} stroke={color} strokeWidth={2} dot={false} />
      {
        // <Brush dataKey={xKey} startIndex={data.length - 40}>
        //   <AreaChart>
        //     <YAxis hide domain={['auto', 'auto']} />
        //     <Area
        //       dataKey={yKey}
        //       stroke='#ff7300'
        //       fill='#ff7300'
        //       dot={false}
        //     />
        //   </AreaChart>
        // </Brush>
      }
    </LineChart>
  </ResponsiveContainer>
);

export default AppLineChart;
