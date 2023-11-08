import { useState } from 'react';

import { Button, Box, Modal, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BsBookmark } from 'react-icons/bs';

import {
  DataSchedule,
  FormChooseActivities,
  HomeForm,
  HomeWrapper,
  InputInfoScheduleTravel,
} from '@/features/home';
import { useModalStore } from '@/hooks';
import { formatDateToString } from '@/utils';

const initialValue: InputInfoScheduleTravel = {
  dateFrom: null,
  dateTo: null,
  fullname: '',
  phoneNumber: '',
  email: '',
  hourDelay: '',
  regulatedHour: '',
  location: 0,
};

const Home = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputInfoScheduleTravel>({ defaultValues: initialValue });

  const [schedule, setSchedule] = useState<DataSchedule | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const { isOpen, close } = useModalStore();

  const onSubmit = (data: InputInfoScheduleTravel) => {
    const datesArray: { title: string; activities: string[] }[] = [];
    let currentDate = data.dateFrom;
    if (currentDate) {
      while (
        currentDate.isBefore(data.dateTo) ||
        currentDate.isSame(data.dateTo, 'day')
      ) {
        if (
          !currentDate.isSame(data.dateTo) &&
          !currentDate.isSame(data.dateFrom)
        ) {
          datesArray.push({
            title: currentDate.format('DD/MM/YYYY'),
            activities: [],
          });
        }

        currentDate = currentDate.add(1, 'day');
      }
    }

    void setSchedule({
      ...data,
      dateFrom: data.dateFrom ? formatDateToString(data.dateFrom) : '',
      dateTo: data.dateTo ? formatDateToString(data.dateTo) : '',
      sched: datesArray,
    });
  };

  const handleAddActivity = (activities: string[]) => {
    const fakeSchedule = schedule;
    if (fakeSchedule && index !== null) {
      fakeSchedule.sched[index].activities = activities;
    }
    setSchedule(fakeSchedule);
    close();
  };

  const handleOrder = () => {
    void toast.success('Order successfully');
    void reset(initialValue);
    setSchedule(null);
  };

  return (
    <Box className="relative w-11/12 mx-auto">
      {schedule && (
        <Modal
          open={isOpen}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="w-3/5 bg-white p-5 rounded-xl">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Chọn hoạt động trong ngày
            </Typography>
            <FormChooseActivities
              location={schedule.location}
              onSave={(activities: string[]) => handleAddActivity(activities)}
              listSched={schedule.sched}
              index={index}
            />
          </Box>
        </Modal>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full p-10 shadow-xl mb-16"
      >
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          className="border-b-2 border-dashed border-slate-700 mb-5"
        >
          <BsBookmark />
          <Typography variant="h6" className="uppercase">
            lập lịch trình
          </Typography>
        </Box>
        <HomeForm control={control} errors={errors} watch={watch} />
        <Box className="float-right mt-1">
          <Button variant="contained" color="error" size="small" type="submit">
            Build
          </Button>
        </Box>
      </Box>
      {schedule && (
        <>
          <HomeWrapper
            schedule={schedule}
            setIndex={setIndex}
            setSchedule={setSchedule}
          />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap={2}
            className="fixed bottom-5 right-3"
          >
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleOrder}
              disabled={schedule.sched.some(
                (item) => item.activities.length === 0,
              )}
            >
              Đặt hàng
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              disabled={schedule.sched.some(
                (item) => item.activities.length === 0,
              )}
            >
              Xuất lịch trình
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
