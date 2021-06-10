import styled from "styled-components";

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
  align-items: center;
  justify-content: center;
  margin: 0 1rem 1rem 0;

  svg {
    width: 90%;
    height: 90%;
  }

  @media (min-width:480px)  {
    width: 15%;
    margin: 0 2rem 1rem 0;
  }
`

export default function ResultsGrid() {
  const results: {shape: string
 ;   color: string}[] = [{shape: 'Round', color: 'red'},{shape: 'Rectangle', color: 'blue'}, {shape: 'Triangle', color: '#1600ff'}, {shape: 'Square', color: '#008000'},{shape: 'Oval', color: '#feff00'},{shape: 'Oval', color: '#b3cbfb'},{shape: 'Oval', color: '#999999'}, {shape: 'Rectangle', color: '#000'}]

  return (
    <div>
      <h1>All Oval Items. (6)</h1>
      <FilterList>
        {
          results.map(item => {
            {
              switch(item.shape) {
                case 'Oval':
                  return (
                    <FilterItem>
                      <svg viewBox="0 0 154 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="75" cy="98" rx="75" ry="98" fill={item.color}/>
                      </svg>
                    </FilterItem>
                  );
                  break;
                case 'Round':
                  return (
                    <FilterItem>
                      <svg fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="100" fill={item.color}/>
                      </svg>
                     
                    </FilterItem>
                  );
                case 'Triangle':
                  return (
                    <FilterItem>
                      <svg width="214" height="185" viewBox="0 0 214 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M107 0L213.521 184.5H0.478874L107 0Z" fill={item.color}/>
                      </svg>
                      
                    </FilterItem>
                  );
                case 'Square':
                  return (
                    <FilterItem>
                      <svg width="150" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={item.color} d="M0 0h196v196H0z"/>
                      </svg>
                      
                    </FilterItem>
                  );
                  break;
                case 'Rectangle':
                  return (
                    <FilterItem>
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '65%'}}>
                        <path fill={item.color} d="M0 0h347v196H0z"/>
                      </svg>
                      
                    </FilterItem>
                  );
                  break;
                default:
                  // code block
              }
            }

            
          })
        }
      </FilterList>
    </div>
  )
}
