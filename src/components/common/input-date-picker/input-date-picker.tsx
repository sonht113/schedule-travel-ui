/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

type Props = DatePickerProps<Dayjs> & {
  dateFrom?: string | Dayjs | null;
};

function InputDatePicker({ dateFrom, ...props }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        views={['day', 'month', 'year']}
        disablePast
        shouldDisableDate={(day) =>
          dateFrom ? day.isBefore(dayjs(dateFrom)) : false
        }
      />
    </LocalizationProvider>
  );
}

export default InputDatePicker;
