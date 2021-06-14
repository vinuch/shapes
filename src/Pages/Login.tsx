import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    border: 1px solid #bebaba;
    width: 75%;
    padding: 2rem;
    margin-top: 5rem;
    border-radius: 8px;
    
    div {
      margin: 0 auto;
      width: 95%;
    }
  }

  @media (min-width:480px)  {
   form {
      width: 40%;

    div {
      width: 70%;
    }
   }
  
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const InputLabel = styled.label`
  font-size: 14px;
  text-align: left;
  font-weight: 500;
`;

const InputField = styled.input`
  padding: .5rem;
  border-radius: 4px;
  border: 1px solid #bebaba;
  width: 95%;
  margin: .5rem 0 .8rem;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #f5847f;
    border-radius: 8px;
    color: #fff;
    border: none;
    padding: .6rem 5rem;
    font-weight: 700;
    margin: 2rem auto 0;
    cursor: pointer;
  }

`


export default function Login({setLoggedIn}: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('user', username)
    setLoggedIn(true)
    history.push('/')
  }

  return (
    <Container>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <Title>Login</Title>
          <p style={{textAlign: 'center', fontSize: '12px', color: 'gray'}}>use any details</p>
          <div>
            <InputLabel htmlFor="name">Username</InputLabel><br />
            <InputField type="text" name="name" id="name" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </div>

          <div>
            <InputLabel htmlFor="password">Password</InputLabel><br />
            <InputField type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>

          <LoginButton>
            <button type="submit">
              Login
            </button>
          </LoginButton>

        </div>
       
      </form>
    </Container>
  )
}

