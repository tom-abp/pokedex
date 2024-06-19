import { useParams } from 'react-router-dom';
import { usePokemon } from '../api/usePokemon';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Skeleton,
  TextField,
} from '@mui/material';

export function PagePokemon() {
  const { name } = useParams();
  const { data, isPending } = usePokemon(name);

  return isPending || !data ? (
    <Skeleton variant="text" width="100%" height="100%" />
  ) : (
    <Box overflow="auto" height="100%" padding={2}>
      <Box marginTop={3} display="flex" gap={2} flexWrap="wrap">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <TextField value={data.name} InputProps={{ readOnly: true }} />
        </FormControl>
        <FormControl>
          <FormLabel>Weight</FormLabel>
          <TextField
            type="number"
            value={data.weight}
            InputProps={{ readOnly: true }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Height</FormLabel>
          <TextField
            type="number"
            value={data.height}
            InputProps={{ readOnly: true }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Base Experience</FormLabel>
          <TextField
            type="number"
            value={data.base_experience}
            InputProps={{ readOnly: true }}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox checked={data.is_default} disabled={true} />}
          label="Default Character?"
        />
      </Box>
    </Box>
  );
}
