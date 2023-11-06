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
    activities: [
      'Thăm Ngũ Hành Sơn - Hội An. Ăn tối tại Hội An(tour trọn gói giá 450k)',
      'Khám phá chợ đêm Helio, thưởng thức ẩm thực đường phố và check in ở Cung Văn hóa Thiếu nhi',
      'Ngắm bình minh và tắm biển Mỹ Khê',
      'Khám phá ẩm thực 2 khu chợ nổi tiếng Đà Nẵng và mua quà cho người thân',
      'Ngồi cafe Wunderlust số 96 Trần Phú, Hải Châu Đà Nẵng',
    ],
  },
  [EnumProvinceCode['HO_CHI_MINH']]: {
    activities: [
      'Thăm Ngũ Hành Sơn - Hội An. Ăn tối tại Hội An(tour trọn gói giá 450k)',
      'Khám phá chợ đêm Helio, thưởng thức ẩm thực đường phố và check in ở Cung Văn hóa Thiếu nhi',
      'Ngắm bình minh và tắm biển Mỹ Khê',
      'Khám phá ẩm thực 2 khu chợ nổi tiếng Đà Nẵng và mua quà cho người thân',
      'Ngồi cafe Wunderlust số 96 Trần Phú, Hải Châu Đà Nẵng',
    ],
  },
  [EnumProvinceCode['DA_NANG']]: {
    activities: [
      'Thăm Ngũ Hành Sơn - Hội An. Ăn tối tại Hội An(tour trọn gói giá 450k)',
      'Khám phá chợ đêm Helio, thưởng thức ẩm thực đường phố và check in ở Cung Văn hóa Thiếu nhi',
      'Ngắm bình minh và tắm biển Mỹ Khê',
      'Khám phá ẩm thực 2 khu chợ nổi tiếng Đà Nẵng và mua quà cho người thân',
      'Ngồi cafe Wunderlust số 96 Trần Phú, Hải Châu Đà Nẵng',
    ],
  },
};
