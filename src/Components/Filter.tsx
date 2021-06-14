import React, { Dispatch, SetStateAction, useContext } from 'react'
import styled from 'styled-components';
import { FilterContext } from '../Pages/Home';

import data from '../utils/data.json'
const {shapes, colors} = data

const Subtitle = styled.h3`
  color: #3d81f7;
  font-size: 16px;
  font-weight: 400;
`

const ShapeOption = styled.li`
  margin: .3rem 0 1.5rem;

  input {
    display: none;
  }

  input[name='shape']:checked+label {
    background-color: #d7e3f7;
  }
  label {
    border-radius: 14px;
    padding: .5rem .8rem ;
    margin: 0 .8rem 0 0;
    border: 1px solid #3d81f7;
    font-size: 12px;
    cursor: pointer;
    transition: all ease-in-out .2s;
  }

`

const ColorOption = styled.li`
  margin: .3rem 0 1.5rem;

  input {
    display: none;
  }

  input[name='color']:checked+label {
    border: 3px solid #3d81f7;
    box-shadow: 0px 6px 40px rgba(61, 129, 247, 0.25);
  }
  label {
    background-color:  ${props => props.color};
    border-radius: 50%;

    padding: .7rem 1.2rem ;
    margin: 0 .8rem 0 0;
    border: 1px solid #3d81f7;
    font-size: 12px;
    cursor: pointer;
    transition: all ease-in-out .2s;
  }

`

  const Filter: React.FC = () => {
    const {shapesState, colorsState, setShapesState, setColorsState} = useContext(FilterContext);

  const handleCheckboxOnChange = (position: number, checkboxState: boolean[], checkboxStateHandler: Dispatch<SetStateAction<boolean[]>>) => {
    const updatedCheckedState = checkboxState.map((item: boolean, index: number) =>
     index === position ? !item : item
    );

    checkboxStateHandler(updatedCheckedState);
    if(checkboxState === shapesState) {
      setShapesState(updatedCheckedState)
    }else {
      setColorsState(updatedCheckedState)
    }
  };
  return (
    <>
      <h1>Filters</h1>
      <Subtitle>Shapes</Subtitle>
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          shapes.map((item: string, index: number )=> (
            <ShapeOption key={`${item}-${index}`}>
            
              <input type="checkbox" id={item} name="shape" onChange={() => handleCheckboxOnChange(index, shapesState, setShapesState)} checked={shapesState[index]} />
              <label htmlFor={item}> {item} </label>
            </ShapeOption>

          ))
        }
      </ul>

      <Subtitle>Colors</Subtitle>
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          colors.map((item: {name: string, color: string}, index: number )=> (
            <ColorOption color={item.color} key={`${item.color}-${index}`}>
              <input type="checkbox" id={item.name} name="color" checked={colorsState[index]}  onChange={() => handleCheckboxOnChange(index, colorsState, setColorsState)} />
              <label htmlFor={item.name}></label>
            </ColorOption>
          ))
        }
      </ul>
    </>
  )
}

export default Filter;

