function login(user){
  return {type: "LOGIN_USER", payload: user}
}

function fetchCurrentUser(user){
  return {type: "FETCH_CURRENT_USER", payload: user}
}

function fetchCharity(charity) {
  return {type: "FETCH_CHARITY", payload: charity}
}

function setFilterValue(filterValue) {
  return {type: "SET_FILTER_VALUE", payload: filterValue}
}

function fetchDonation(donation) {
  return {type: "FETCH_DONATION", payload: donation}
}

export {
  login, fetchCurrentUser, fetchCharity, setFilterValue, fetchDonation
}
