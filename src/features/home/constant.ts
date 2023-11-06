import { EnumProvinceCode } from './service/enum';

export const LOCATION_LIST = {
  [EnumProvinceCode['HA_NOI']]: {
    label: 'Hà Nội',
    value: EnumProvinceCode['HA_NOI'],
  },
  [EnumProvinceCode['HO_CHI_MINH']]: {
    label: 'Hồ Chí Minh',
    value: EnumProvinceCode['HO_CHI_MINH'],
  },
  [EnumProvinceCode['DA_NANG']]: {
    label: 'Đà Nẵng',
    value: EnumProvinceCode['DA_NANG'],
  },
};

export const LOCATION_OPTION = Object.values(LOCATION_LIST);

export const LIST_ACTIVITIES_TRAVEL = {
  [EnumProvinceCode['HA_NOI']]: {
    activities: ['aaaa', 'bbbb', 'cccc'],
  },
  [EnumProvinceCode['HO_CHI_MINH']]: {
    activities: ['aaaa', 'bbbb', 'cccc'],
  },
  [EnumProvinceCode['DA_NANG']]: {
    activities: ['aaaa', 'bbbb', 'cccc'],
  },
};
