import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PagePokemonList } from './components/PagePokemonList';
import { PagePokemon } from './components/PagePokemon';
import { PageTemplate } from './components/PageTemplate';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route path="/pokemon" element={<PagePokemonList />} />
            <Route path="/pokemon/:name" element={<PagePokemon />} />
            <Route index element={<Navigate to="/pokemon" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
