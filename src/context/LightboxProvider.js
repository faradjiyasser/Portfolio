import { useReducer } from "react"
import LightboxContext from "./LightboxContext"
import GraphicReducer from "./reducers/GraphicReducer"

const LightboxProvider = (props) => {
    const [graphicStore, dispatch] = useReducer(GraphicReducer,{
        lightBoxStauts: false,
        current:{},
    }) 
  return (
    <LightboxContext.Provider value={{graphicStore, dispatch}} >
        {props.children}
    </LightboxContext.Provider>
  )
}

export default LightboxProvider