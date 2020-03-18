import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_OK = 'FETCH_DATA_OK'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

export const fetchData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios.get('https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=15&urls=true&httpsUrls=true')
    .then(res => {dispatch({type: FETCH_DATA_OK, payload: res.data});
console.log(res)})
    .catch(err => dispatch({type: FETCH_DATA_FAIL, payload: err}))
}