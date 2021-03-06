import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components'
import Filter from '../Components/Filter'
import ResultsGrid from '../Components/ResultsGrid'

import data from '../utils/data.json'
const {shapes, colors} = data


const Container = styled.div`
  padding: 1.5rem 1rem;
  background-color: #f5f6fc;
  min-height: 83vh;

  @media (min-width:480px)  {
    padding: 1.5rem 10rem;
  }
`
type IFilterContext = {
  colorsState: boolean[], 
  setColorsState: React.Dispatch<React.SetStateAction<boolean[]>>, 
  shapesState: boolean[], 
  setShapesState: React.Dispatch<React.SetStateAction<boolean[]>>
};

export const FilterContext = React.createContext<IFilterContext>({
  colorsState: [], 
  setColorsState: () => null, 
  shapesState: [], 
  setShapesState: () => null}
);

export default function Home({isLoggedIn}: {isLoggedIn: boolean}) {
  const [shapesState, setShapesState] = useState<boolean[]>(new Array(shapes.length).fill(true))
  const [colorsState, setColorsState] = useState<boolean[]>(new Array(colors.length).fill(true))
  const history = useHistory();
  useEffect(() => {
    if (!isLoggedIn){
      history.push('/login')
    }
  }, [isLoggedIn, history])
    
    return (
      <Container>
        <FilterContext.Provider value={{shapesState, colorsState, setShapesState, setColorsState}}>
          <Filter />
          <ResultsGrid />
        </FilterContext.Provider>
      </Container>

    )

}
