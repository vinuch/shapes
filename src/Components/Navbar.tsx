import styled from 'styled-components';


 const Container =  styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (min-width:480px)  {
    padding: 1.5rem 10rem;
  }
`;

const LogoutBtn = styled.button`
  cursor: pointer;
  color: #f5847f;
  display: flex;
  align-items: center;
  padding: .5rem;
  border: none;
  background-color: #fff;
  svg {
    width: 1rem;
    height: 1rem;
  }
  span {
    margin: 0 .5rem;
  }
`

export default function Navbar() {
  return (
    <div>
      <Container>
        <span>Shapes</span>
        <LogoutBtn>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f5847f" d="M255.15 468.625H63.787c-11.737 0-21.262-9.526-21.262-21.262V64.638c0-11.737 9.526-21.262 21.262-21.262H255.15c11.758 0 21.262-9.504 21.262-21.262S266.908.85 255.15.85H63.787C28.619.85 0 29.47 0 64.638v382.724c0 35.168 28.619 63.787 63.787 63.787H255.15c11.758 0 21.262-9.504 21.262-21.262 0-11.758-9.504-21.262-21.262-21.262z"/><path fill="#f5847f" d="M505.664 240.861L376.388 113.286c-8.335-8.25-21.815-8.143-30.065.213s-8.165 21.815.213 30.065l92.385 91.173H191.362c-11.758 0-21.262 9.504-21.262 21.262 0 11.758 9.504 21.263 21.262 21.263h247.559l-92.385 91.173c-8.377 8.25-8.441 21.709-.213 30.065a21.255 21.255 0 0015.139 6.336c5.401 0 10.801-2.041 14.926-6.124l129.276-127.575A21.303 21.303 0 00512 255.998c0-5.696-2.275-11.118-6.336-15.137z"/></svg>
          <span>Logout</span>  
        </LogoutBtn>

      </Container>
    </div>
  )
}