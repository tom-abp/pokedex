import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { PagePokemonList } from './components/PagePokemonList';
import { PagePokemon } from './components/PagePokemon';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/pokemon' element={<PagePokemonList />} />
          <Route path='/pokemon/:name' element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
