import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { usePokemonList } from '../api/usePokemonList';
import { useCallback } from 'react';
import { INamedApiResource, IPokemon } from 'pokeapi-typescript';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
  },
];

export function PagePokemonList() {
  const navigate = useNavigate();
  const { data, isPending } = usePokemonList();
  const rows = data?.results || [];
  const getRowId = useCallback((row: INamedApiResource<IPokemon>) => {
    return row.url;
  }, []);

  const onRowClick = useCallback(
    (params: GridRowParams<INamedApiResource<IPokemon>>) => {
      navigate(`/pokemon/${params.row.name}`);
    },
    [navigate],
  );

  return (
    <DataGrid
      rows={rows}
      loading={isPending}
      autoPageSize={true}
      sx={{ textTransform: 'uppercase' }}
      columns={columns}
      getRowId={getRowId}
      onRowClick={onRowClick}
    />
  );
}
