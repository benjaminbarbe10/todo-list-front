export const api = ext => `http://localhost:8080/${ext}`;

//
// ─── ACTION TYPES ───────────────────────────────────────────────────────────────
//

export const GET_ADVERTS = "GET_ADVERTS";
export const GET_ADVERT = "GET_ADVERT";

//
// ─── ACTION CREATORS ────────────────────────────────────────────────────────────
//

export function addAdvert(data) {
  return dispatch => {
    return fetch("adverts", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
}

export function getAdverts() {
  return dispatch => {
    fetch("adverts")
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: GET_ADVERTS, payload });
      });
  };
}

export function getAdvert(id) {
  return dispatch => {
    fetch(`${id}`)
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: GET_ADVERT, payload });
      });
  };
}
