const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id != action.expense.id
            })     
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (action.id === expense.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

