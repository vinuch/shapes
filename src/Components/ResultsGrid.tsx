import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../Pages/Home";

import {shapes, colors} from '../utils/data.json'

const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width:480px)  {
    justify-content: start;
  }
`

const FilterItem = styled.li`
  width: 25%;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 19px #0000003d;
  margin: 0 1rem 1.5rem 0;

  svg {
    width: 90%;
    height: 90%;
  }

  @media (min-width:480px)  {
    width: 15%;
    margin: 0 2rem 1.5rem 0;
  }
`

export default function ResultsGrid() {
  const {shapesState, colorsState} = useContext(FilterContext);
  const allShapes = shapesState.every(item => item === true )
  const allColors = colorsState.every(item => item === true )
  const someShapes = shapesState.some(item => item === true ) && !shapesState.every(item => item === true )
  const someColors = colorsState.some(item => item === true) && !colorsState.every(item => item === true )
  const singleColor = colorsState.filter(item => item === true ).length === 1
  const singleShape = shapesState.filter(item => item === true ).length === 1
  

  return (
    <div>
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
      {/* {JSON.stringify(shapesState)} */}

      <FilterList>
        {
        shapes.map((item, index) => {

            switch(item) {
              case 'Oval':
                if(shapesState[index]){
                return colors.map((item, index) => {
                  if(colorsState[index]){
                    return (
                      <FilterItem>
                        <svg viewBox="0 0 154 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="75" cy="98" rx="75" ry="98" fill={item.color}/>
                        </svg>
                    </FilterItem>
                    )
                  }
                  return false
                
                });
                };
              break;
      
              case 'Round':
                if(shapesState[index]){
                return colors.map((item, index) => {
                  if(colorsState[index]){
                    return (
                      <FilterItem>
                        <svg fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="100" cy="100" r="100" fill={item.color}/>
                        </svg>
                        
                      </FilterItem>
                    )
                  }
                  return false


                });
                };
              break;
              case 'Triangle':
                if(shapesState[index]){
                return colors.map((item, index) => {
                  if(colorsState[index]){
                    return (
                      <FilterItem>
                        <svg width="214" height="185" viewBox="0 0 214 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M107 0L213.521 184.5H0.478874L107 0Z" fill={item.color}/>
                        </svg>
                        
                      </FilterItem>
                    )
                  }
                  return false
                 
                });
                };
              break;
              case 'Square':
                if(shapesState[index]){
                return colors.map((item, index) => {
                  if(colorsState[index]){
                    return (
                      <FilterItem>
                        <svg width="150" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill={item.color} d="M0 0h196v196H0z"/>
                        </svg>
                          
                      </FilterItem>
                    )
                  }
                  return false
                  
                });
                };
              break;
              case 'Rectangle':
                if(shapesState[index]){
                return colors.map((item, index) => {
                  if(colorsState[index]){
                    return (
                      <FilterItem>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '65%'}}>
                          <path fill={item.color} d="M0 0h347v196H0z"/>
                        </svg>
                        
                      </FilterItem>
                    )
                  }
                  return false
                  
                });
                };
              break;
              default:
                if(shapesState[index]){
                  return colors.map((item, colorIndex) => {
                    if(colorsState[colorIndex]){
                      return (
                        <FilterItem>
                           <svg width="214" height="185" viewBox="0 0 214 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107 0L213.521 184.5H0.478874L107 0Z" fill={item.color}/>
                          </svg>
                          <p style={{width: '100%', textAlign: 'center'}}>{shapes[index]}</p>
                        
                        </FilterItem>
                      )
                    }
                    return false
                    
                  });
                  }
                return false
            }  
            return false
            
          })
        }
      </FilterList>
    </div>
  )
}
