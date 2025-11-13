import { useReducer } from 'react';
import { AttendanceData } from '../models';

type FormData = AttendanceData;

type Action =
  | { type: 'update'; payload: Partial<FormData> }
  | { type: 'reset'; payload?: Partial<FormData> }
  | { type: 'add-event'; payload: FormData['events'][0] }
  | { type: 'remove-event'; payload: FormData['events'][0] };

const initialFormData: FormData = {
  name: '',
  guests: 1,
  events: [],
  attending: true,
  message: ''
};

const reducer = (prevState: FormData, action: Action): FormData => {
  switch (action.type) {
    case 'update':
      return { ...prevState, ...action.payload };

    case 'add-event':
      return { ...prevState, events: [...prevState.events, action.payload] };

    case 'remove-event':
      return {
        ...prevState,
        events: prevState.events.filter((item) => item !== action.payload)
      };

    case 'reset': {
      if (action.payload) {
        return { ...prevState, ...action.payload };
      }

      return { ...initialFormData };
    }

    default:
      return prevState;
  }
};
export const useAttendanceForm = () => {
  const [formData, dispatch] = useReducer(reducer, initialFormData);

  const updateForm = (payload: Partial<FormData>) => {
    dispatch({ type: 'update', payload });
  };

  const updateEvent = (payload: FormData['events'][0], isAppended: boolean) => {
    dispatch({ type: isAppended ? 'add-event' : 'remove-event', payload });
  };

  const reset = (payload?: FormData) => {
    dispatch({ type: 'reset', payload });
  };

  return { formData, updateForm, updateEvent, reset };
};
