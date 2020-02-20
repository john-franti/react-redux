import redux from 'redux';
const createStore = redux.createStore();

const initialState = {
  loading: false,
  donuts: [],
  error: ""
};

const FETCH_DONUTS_REQUEST = "FETCH_DONUTS_REQUEST";
const FETCH_DONUTS_SUCCESS = "FETCH_DONUTS_SUCCESS";
const FETCH_DONUTS_FAILURE = "FETCH_DONUTS_FAILURE";

const fetchDonutsRequest = () => {
  return {
    type: FETCH_DONUTS_REQUEST
  };
};

const fetchDonutsSuccess = donuts => {
  return {
    type: FETCH_DONUTS_SUCCESS,
    payload: donuts
  };
};

const fetchDonutsError = error => {
  return {
    type: FETCH_DONUTS_ERROR,
    payload: error
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DONUTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DONUTS_SUCCESS:
      return {
        loading: false,
        donuts: action.payload,
        error: ""
      };
    case FETCH_DONUTS_FAILURE:
      return {
        loading: false,
        donuts: [],
        error: action.error
      };
  }
};

const store = createStore(reducer)
