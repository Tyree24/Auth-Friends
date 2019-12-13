export const LOGINSTART = 
export const LOGINSUCCESS =
export const LOGINFAILURE =

export const login = cred => dispatch => (
    dispatch({ type: LOGINSTART });
return axios.post{ 'https://localhost:5000/api/login', cred }
    .then(res => {
    window.localStorage.setItem('token', res.data.payload)
    dispatch({})
}
)
)}