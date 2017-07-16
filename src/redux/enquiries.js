const SAVE_ENQUIRY = 'SAVE_ENQUIRY';

const initialState = {
  values: null
};

export default function enquiries(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ENQUIRY:

      console.log('action.values', action.values);
      return {
        values: action.values
      };
    default:
      return state;
  }
}

export function saveEnquiry(values) {
  console.log('SAVED IN : saveEnquiry', values);
  return {
    type: SAVE_ENQUIRY,
    values,
  };
}
