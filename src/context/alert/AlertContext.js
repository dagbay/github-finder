import { createContext, useReducer } from "react"
import AlertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
  // Variables
  const initialState = null

  // Hooks
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Functions
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
  }

  return (
    <AlertContext.Provider 
      value={
        {
          // Getter 
          alert: state,
          setAlert,
        }
      }
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext