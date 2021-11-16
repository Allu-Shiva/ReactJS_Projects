const EmploymentTypeItem = props => {
  const {eachItem, onCheckBox} = props

  const onClickCheckbox = event => onCheckBox(event)
  return (
    <li className="jobs-emp-listItem" key={eachItem.employmentTypeId}>
      <input
        type="checkbox"
        id={eachItem.employmentTypeId}
        className="checkbox"
        value={eachItem.employmentTypeId}
        onClick={onClickCheckbox}
      />
      <label htmlFor={eachItem.employmentTypeId} className="label">
        {eachItem.label}
      </label>
    </li>
  )
}
export default EmploymentTypeItem
