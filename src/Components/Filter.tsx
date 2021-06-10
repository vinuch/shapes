import styled from 'styled-components';

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

  input[name='shape']:checked+label {
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




export default function Navbar() {
  const shapes: string[] = ['Oval', 'Round', 'Triangle', 'Square', 'Rectangle']
  const colors: {name: string, color: string}[] = [{name: 'red', color: 'red'}, {name: 'blue', color: '#1600ff'}, {name: 'green', color: '#008000'},{name: 'yellow', color: '#feff00'},{name: 'light Blue', color: '#b3cbfb'},{name: 'gray', color: '#999999'}]
  return (
    <>
      <h1>Filters</h1>
      <Subtitle>Shapes</Subtitle>
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          shapes.map((item: string )=> (
            <ShapeOption>
              <input type="checkbox" id={item} name="shape" value={item} />
              <label htmlFor={item}> {item} </label>
            </ShapeOption>

          ))
        }
      </ul>

      <Subtitle>Colors</Subtitle>
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          colors.map((item: {name: string, color: string} )=> (
            <ColorOption color={item.color}>
              <input type="checkbox" id={item.name} name="color" value={item.name} />
              <label htmlFor={item.name}></label>
            </ColorOption>
          ))
        }
      </ul>
    </>
  )
}
