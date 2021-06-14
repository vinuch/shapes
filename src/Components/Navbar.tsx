import styled from 'styled-components';
import { Link } from 'react-router-dom'

 const Container =  styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.5rem 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      display: flex;
      align-items: center;
      justify-content: space-around;

      span {
        margin: 0 .5rem
      }
    }
  }
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

export default function Navbar({isLoggedIn, setLoggedIn, user}: {isLoggedIn: boolean; setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; user: string}) {
  return (
    <div>
      <Container>
        <span>Shapes</span> 
        {
          isLoggedIn ? (
            <div>
              <p>
                <svg width="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667"><path d="M245.333 0C110.059 0 0 110.059 0 245.333s110.059 245.333 245.333 245.333 245.333-110.059 245.333-245.333S380.608 0 245.333 0zm0 469.333c-123.52 0-224-100.48-224-224s100.48-224 224-224 224 100.48 224 224-100.48 224-224 224z"/><path d="M245.333 234.667c-76.459 0-138.667 62.208-138.667 138.667 0 5.888 4.779 10.667 10.667 10.667S128 379.221 128 373.333C128 308.629 180.629 256 245.333 256s117.333 52.629 117.333 117.333c0 5.888 4.779 10.667 10.667 10.667S384 379.221 384 373.333c0-76.458-62.208-138.666-138.667-138.666zM245.333 64c-41.173 0-74.667 33.493-74.667 74.667s33.493 74.667 74.667 74.667S320 179.84 320 138.667 286.507 64 245.333 64zm0 128C215.936 192 192 168.064 192 138.667s23.936-53.333 53.333-53.333 53.333 23.936 53.333 53.333S274.731 192 245.333 192z"/></svg>
                <span>{user}</span> 
              </p>

                    <Link to="/login">
                      <LogoutBtn onClick={() => {localStorage.setItem('user', ''); setLoggedIn(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f5847f" d="M255.15 468.625H63.787c-11.737 0-21.262-9.526-21.262-21.262V64.638c0-11.737 9.526-21.262 21.262-21.262H255.15c11.758 0 21.262-9.504 21.262-21.262S266.908.85 255.15.85H63.787C28.619.85 0 29.47 0 64.638v382.724c0 35.168 28.619 63.787 63.787 63.787H255.15c11.758 0 21.262-9.504 21.262-21.262 0-11.758-9.504-21.262-21.262-21.262z"/><path fill="#f5847f" d="M505.664 240.861L376.388 113.286c-8.335-8.25-21.815-8.143-30.065.213s-8.165 21.815.213 30.065l92.385 91.173H191.362c-11.758 0-21.262 9.504-21.262 21.262 0 11.758 9.504 21.263 21.262 21.263h247.559l-92.385 91.173c-8.377 8.25-8.441 21.709-.213 30.065a21.255 21.255 0 0015.139 6.336c5.401 0 10.801-2.041 14.926-6.124l129.276-127.575A21.303 21.303 0 00512 255.998c0-5.696-2.275-11.118-6.336-15.137z"/></svg>
                        <span>Logout</span>  
                      </LogoutBtn>
                    </Link>
            </div>
          ): null 

      }
        
      


      </Container>
    </div>
  )
}
