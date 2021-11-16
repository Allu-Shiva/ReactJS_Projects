// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

import {ChartContainer, ChartTitle} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <ChartContainer>
      <ChartTitle>Vaccination by gender</ChartTitle>
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
            cy="80%"
            startAngle={180}
            endAngle={0}
            data={vaccinationByGender}
            dataKey="count"
            innerRadius="40%"
            outerRadius="70%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default VaccinationByGender
