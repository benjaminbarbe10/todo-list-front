export const api = ext => `http://localhost:8080/${ext}`;

export const getAdverts = () => {
    return dispatch => {
        fetch("/adverts")
          .then(res => res.json())
          .then(payload => {
            dispatch({ type: "GET_ADVERTS", payload });
          });
    }
}
