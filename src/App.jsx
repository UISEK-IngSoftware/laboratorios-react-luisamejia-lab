import Header from './components/Header'
import './App.css'
import PokemonCard from './components/PokemonCard'
import { Container } from '@mui/material'

function App() {
  return (
    <>
    <Header />
    <Container>
    <PokemonList />
    </Container>
    </>
  )
}

export default App
