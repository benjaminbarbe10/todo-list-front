export const api = ext => `http://localhost:8080/${ext}`;

export function getAdverts() {
  return dispatch => {
    fetch("/adverts")
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: "GET_ADVERTS", payload });
      });
  };
}

export function getAdvert() {
  return dispatch => {
    fetch("/adverts/5b13db53f43b8e169fa8b5cb")
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: "GET_ADVERT", payload });
      });
  };
}
