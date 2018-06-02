import axios from "axios";
export const api = ext => `http://locahost:8080/${ext}`;

export const getAdverts = () => {
    return dispatch => {
        axios.get(api('adverts')).then(res => {
            dispatch({
                type: 'GET_ADVERTS',
                payload: res.data
            })
        });
    }
}
