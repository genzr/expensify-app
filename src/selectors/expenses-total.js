export default (expenses) => {
    if (expenses.length === 0) {
        return 0
    } else {
        const newArray = expenses.map((expense) => expense.amount)
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        return newArray.reduce(reducer)
    }
}