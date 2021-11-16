// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <ChartContainer>
      <ChartTitle>Vaccination by age</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
          <Pie
            cx="50%"
            cy="50%"
            // startAngle={180}
            // endAngle={0}
            data={vaccinationByAge}
            dataKey="count"
          >
            <Cell name="18-14" fill="#2d87bb" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default VaccinationByAge
