import { FC, useMemo } from 'react';

import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Control, FieldErrors, UseFormWatch } from 'react-hook-form';

import LocationFormItem from './location-form-item';
import { InputInfoScheduleTravel } from '../service/type';
import { FormCustom, InputDatePicker } from '@/components';
import { DataFieldInputType } from '@/ts/types';

type Props = {
  control: Control<InputInfoScheduleTravel, unknown>;
  errors: FieldErrors<InputInfoScheduleTravel>;
  watch: UseFormWatch<InputInfoScheduleTravel>;
};

const HomeForm: FC<Props> = ({ control, errors, watch }) => {
  const dateFrom = watch('dateFrom');

  const dataForm: DataFieldInputType<InputInfoScheduleTravel>[] = useMemo(
    () => [
      {
        isRequired: true,
        control,
        name: 'dateFrom',
        element: ({ field }) => (
          <FormControl fullWidth>
            <InputDatePicker {...field} label="Ngày đến" format="DD/MM/YYYY" />
            {errors.dateFrom && (
              <FormHelperText error>{errors.dateFrom.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'dateTo',
        element: ({ field }) => (
          <FormControl fullWidth>
            <InputDatePicker
              {...field}
              label="Ngày đi"
              format="DD/MM/YYYY"
              dateFrom={dateFrom}
            />
            {errors.dateTo && (
              <FormHelperText error>{errors.dateTo.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'fullname',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.fullname ? true : false}
              name="fullname"
              label="Họ và tên"
            />
            {errors.fullname && (
              <FormHelperText error>{errors.fullname.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'phoneNumber',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.phoneNumber ? true : false}
              name="phoneNumber"
              label="Số điện thoại"
            />
            {errors.phoneNumber && (
              <FormHelperText error>
                {errors.phoneNumber.message}
              </FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'email',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.email ? true : false}
              name="email"
              label="Email"
            />
            {errors.email && (
              <FormHelperText error>{errors.email.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'hourDelay',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.hourDelay ? true : false}
              name="hourDelay"
              label="Giờ delay"
            />
            {errors.hourDelay && (
              <FormHelperText error>{errors.hourDelay.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'regulatedHour',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.regulatedHour ? true : false}
              name="regulatedHour"
              label="Giờ quy định"
            />
            {errors.regulatedHour && (
              <FormHelperText error>
                {errors.regulatedHour.message}
              </FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'location',
        element: ({ field }) => (
          <FormControl fullWidth>
            <LocationFormItem
              {...field}
              error={errors.location ? true : false}
            />
            {errors.location && (
              <FormHelperText error>{errors.location.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
    ],
    [control, errors, dateFrom],
  );

  return <FormCustom data={dataForm} />;
};

export default HomeForm;
