// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationCoverage = props => {
  const {last7DaysVaccination, DataFormatter} = props
  return (
    <ChartContainer>
      <ChartTitle>Vaccination Coverage</ChartTitle>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={last7DaysVaccination} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend wrapperStyle={{padding: 10}} />
          <Bar
            dataKey="dose1"
            name="Dose 1"
            fill="#5a8dee"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose2"
            name="Dose 2"
            fill="#f54394"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
export default VaccinationCoverage
