const SAVE_ENQUIRY = 'SAVE_ENQUIRY';

const initialState = {
  values: null
};

export default function enquiries(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ENQUIRY:
      return {
        values: action.values
      };
    default:
      return state;
  }
}

export function saveEnquiry(values) {
  return {
    type: SAVE_ENQUIRY,
    values,
  };
}
