import { lazy } from 'react';

export * from './common/toaster/toaster-config';

const FormCustom = lazy(() => import('./common/form-custom/form-custom'));
const InputDatePicker = lazy(
  () => import('./common/input-date-picker/input-date-picker'),
);

export { FormCustom, InputDatePicker };
