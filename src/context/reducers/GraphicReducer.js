import React from 'react'

const GraphicReducer = (state,action) => {
  if (action.type === "OPEN"){
    return {...state,
        lightBoxStauts: true,
        current:action.payload,
    }
  }
  else if (action.type === "CLOSE"){
    return {...state,
        lightBoxStauts: false,
        current:{},
    }
  } else{ 
    return state;
  }
}

export default GraphicReducer