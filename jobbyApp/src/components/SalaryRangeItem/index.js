const SalaryRangeItem = props => {
  const {eachItem, onSalary} = props
  const onClickSalary = event => onSalary(event)
  return (
    <li className="jobs-emp-listItem" key={eachItem.salaryRangeId}>
      <input
        type="radio"
        id={eachItem.salaryRangeId}
        className="checkbox"
        value={eachItem.salaryRangeId}
        name="salary"
        onClick={onClickSalary}
      />
      <label htmlFor={eachItem.salaryRangeId} className="label">
        {eachItem.label}
      </label>
    </li>
  )
}

export default SalaryRangeItem
