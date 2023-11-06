import { Dayjs } from 'dayjs';

import { EnumProvinceCode } from './enum';

export type InputInfoScheduleTravel = {
  fullname: string;
  dateTo: Dayjs | null;
  dateFrom: Dayjs | null;
  phoneNumber: string;
  email: string;
  location: EnumProvinceCode | 0;
  hourDelay?: string;
  regulatedHour?: string;
};

export type DataSchedule = Omit<
  InputInfoScheduleTravel,
  'dateTo' | 'dateFrom'
> & {
  dateTo: string;
  dateFrom: string;
  sched: { title: string; activities: string[] }[];
};
