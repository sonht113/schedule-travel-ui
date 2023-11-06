import React, { FC } from 'react';

import { InputLabel, MenuItem, Select } from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { LOCATION_OPTION } from '../constant';

type Props = ControllerRenderProps & {
  error: boolean;
};

const LocationFormItem: FC<Props> = ({ error, ...props }) => {
  return (
    <React.Fragment>
      <InputLabel id="select-label">Chọn địa điểm</InputLabel>
      <Select
        {...props}
        labelId="select-label"
        label="Select location"
        name="location"
        error={error}
      >
        <MenuItem defaultChecked value={0}>
          Chọn địa điểm
        </MenuItem>
        {LOCATION_OPTION.map((loc) => (
          <MenuItem key={loc.label} value={loc.value}>
            {loc.label}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default LocationFormItem;
