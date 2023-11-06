/* eslint-disable @typescript-eslint/no-explicit-any */

import { Grid } from '@mui/material';
import { Controller } from 'react-hook-form';

import { DataFieldInputType } from '@/ts/types';
import { validator } from '@/utils';

type Props = {
  data: DataFieldInputType<any>[];
};

function FormCustom({ data }: Props) {
  return (
    <Grid container spacing={2}>
      {data.map((i) => (
        <Grid key={i.name} item xs={12} md={4} lg={2}>
          <Controller
            rules={i.isRequired ? validator('required') : {}}
            control={i.control}
            render={i.element}
            name={i.name}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default FormCustom;
