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

export function getAdvert(id) {
  return dispatch => {
    fetch(`/adverts/${id}`)
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: "GET_ADVERT", payload });
      });
  };
}
