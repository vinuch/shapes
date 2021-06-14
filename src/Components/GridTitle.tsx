import { useContext } from 'react'

import { FilterContext } from "../Pages/Home";
import {shapes, colors} from '../utils/data.json'



export default function GridTitle() {
  const {shapesState, colorsState} = useContext(FilterContext);
  const allShapes = shapesState.every(item => item === true )
  const allColors = colorsState.every(item => item === true )
  const someShapes = shapesState.some(item => item === true ) && !shapesState.every(item => item === true )
  const someColors = colorsState.some(item => item === true) && !colorsState.every(item => item === true )
  const singleColor = colorsState.filter(item => item === true ).length === 1
  const singleShape = shapesState.filter(item => item === true ).length === 1
  return (
    <h1>
    { 
      allShapes && allColors ? 'All items' : 
      singleColor && singleShape  ? `${shapes[shapesState.findIndex(item => item)]} ${colors[colorsState.findIndex(item => item)].name} items` : 
      someColors && singleShape  ? `Multiple ${shapes[shapesState.findIndex(item => item)]} items` :
      allShapes && singleColor ? `All ${colors[colorsState.findIndex(item => item)].name} items` :
      singleShape && allColors ? `All ${shapes[shapesState.findIndex(item => item)]} items` :
      someShapes && singleColor ? `Multiple ${colors[colorsState.findIndex(item => item)].name} items` : 
      (allShapes && someColors) || (allColors && someShapes) ? 'Multiple items' :
      someShapes && someColors ? 'Multiple items' :
      null

    }
  </h1>
  )
}
