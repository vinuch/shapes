import styled from 'styled-components'
import Filter from '../Components/Filter'
import ResultsGrid from '../Components/ResultsGrid'

const Container = styled.div`
  padding: 1.5rem 1rem;

  @media (min-width:480px)  {
    padding: 1.5rem 10rem;
  }
`

export default function Home() {
  return (
    <Container>
      <Filter />
      <ResultsGrid />
    </Container>
  )
}
