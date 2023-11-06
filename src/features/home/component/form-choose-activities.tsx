import { FC, useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

import { LIST_ACTIVITIES_TRAVEL } from '../constant';
import { EnumProvinceCode } from '../service/enum';
import { useModalStore } from '@/hooks';

type Props = {
  location: EnumProvinceCode | 0;
  onSave: (_: string[]) => void;
  listSched: { title: string; activities: string[] }[];
  index: number | null;
};

const FormChooseActivities: FC<Props> = ({
  location,
  onSave,
  listSched,
  index,
}) => {
  const { close } = useModalStore();
  const [listActivity, setListActivity] = useState<string[]>(
    index !== null ? [...listSched[index].activities] : [],
  );

  const handleSave = () => {
    onSave(listActivity);
    setListActivity([]);
  };

  return (
    <Box>
      <FormGroup>
        {location !== 0 &&
          LIST_ACTIVITIES_TRAVEL[location].activities.map((act) => (
            <FormControlLabel
              key={act}
              control={
                <Checkbox
                  defaultChecked={listSched.some((item) =>
                    item.activities.includes(act),
                  )}
                  onChange={(e) => {
                    const fakeList = listActivity;
                    if (e.target.checked) {
                      fakeList.push(act);
                    } else {
                      const index = fakeList.findIndex((i) => i === act);
                      fakeList.splice(index, 1);
                    }
                    setListActivity([...fakeList]);
                  }}
                  disabled={listSched.some((item) =>
                    item.activities.includes(act),
                  )}
                />
              }
              label={act}
            />
          ))}
      </FormGroup>
      <Box display="flex" justifyContent="flex-end" alignItems="center" gap={2}>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => {
            close();
            setListActivity([]);
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FormChooseActivities;
