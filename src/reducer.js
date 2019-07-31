const defaultState = {
  charities: [],
  donations: [],
  selectedUser: null,
  selectedCharity: null,
  filterValue: ""
}

function reducer(prevState = defaultState, action) {
  switch(action.type){
    case "FETCH_ALL_CHARITIES":
      return {...prevState, charities: action.payload}
    case "FETCH_CURRENT_USER":
      return {...prevState, selectedUser: action.payload}
    case "FETCH_CHARITY":
      return {...prevState, selectedCharity: action.payload}
    case "SET_FILTER_VALUE":
      return {...prevState, filterValue: action.payload}
    case "FETCH_DONATION":
    console.log("here")
      return {...prevState, selectedDonation: action.payload}
    default:
      return prevState
  }

}
export default reducer;
