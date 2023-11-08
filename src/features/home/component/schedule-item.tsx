import { FC } from 'react';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { AiFillStar } from 'react-icons/ai';

import { useModalStore } from '@/hooks';

type Props = {
  title?: string;
  activities?: string[];
  position: 'left' | 'right';
  onAddActivity: () => void;
  onRemoveActivity: (_: number) => void;
};

const ScheduleItem: FC<Props> = ({
  title,
  position,
  activities,
  onAddActivity,
  onRemoveActivity,
}) => {
  const { open } = useModalStore();
  return (
    <Box
      className={`w-full relative flex ${
        position !== 'right' ? 'flex-row-reverse' : ''
      } items-center`}
    >
      <div className="w-14 h-14 rounded-full absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-0 bg-red-500">
        <AiFillStar className="text-2xl fill-white" />
      </div>
      <div
        className={`w-1/2 h-full ${
          position === 'right' ? 'border-r-4' : 'border-l-4'
        } border-red-500`}
      >
        <div
          className={`w-11/12 ${
            position === 'right' ? 'float-left' : 'float-right'
          }`}
        >
          <div
            className={`relative flex justify-between h-[40px] items-center bg-orange-500 rounded-tl-xl rounded-tr-xl px-5 before:content-[''] before:border-[10px] before:border-solid before:border-transparent ${
              position === 'right'
                ? 'before:border-l-orange-500'
                : 'before:border-r-orange-500'
            } before:absolute before:bottom-0 ${
              position === 'right'
                ? 'before:right-[-18px]'
                : 'before:left-[-18px]'
            }`}
          >
            <p className="text-lg uppercase text-white">{title}</p>
            <IconButton
              className="!bg-blue-600"
              size="small"
              color="success"
              onClick={() => {
                open();
                onAddActivity();
              }}
            >
              <AddIcon fontSize="small" className="text-white" />
            </IconButton>
          </div>
          <div className="px-5 rounded-bl-xl rounded-br-xl shadow-xl py-2">
            <ul className="list-disc">
              {activities?.map((ac, index) => (
                <li key={ac}>
                  <span className="text-sm">{ac}</span>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => onRemoveActivity(index)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </li>
              ))}
              {activities && activities.length === 0 && (
                <Typography variant="body2" className="text-center">
                  Chọn hoạt động trong ngày{' '}
                </Typography>
              )}
            </ul>
            {activities && activities.length > 0 && (
              <>
                <hr className="border-dashed mb-3 " />
                <div className="flex gap-3 w-full justify-end">
                  <Button variant="contained" color="primary" size="small">
                    view 360
                  </Button>
                  <Button variant="contained" color="primary" size="small">
                    chi tiết
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-1/2 h-full  ${
          position === 'right' ? 'border-l-4' : 'border-r-4'
        } border-red-500`}
      >
        <div
          className={`w-11/12 invisible ${
            position === 'right' ? 'float-right' : 'float-left'
          }`}
        >
          <div
            className={`relative flex justify-between h-[40px] items-center bg-orange-500 rounded-tl-xl rounded-tr-xl px-5 before:content-[''] before:border-[10px] before:border-solid before:border-transparent ${
              position === 'right'
                ? 'before:border-l-orange-500'
                : 'before:border-r-orange-500'
            } before:absolute before:bottom-0 ${
              position === 'right'
                ? 'before:right-[-18px]'
                : 'before:left-[-18px]'
            }`}
          >
            <p className="text-lg uppercase text-white">{title}</p>
            <IconButton
              className="!bg-blue-600"
              size="small"
              color="success"
              onClick={() => {
                open();
                onAddActivity();
              }}
            >
              <AddIcon fontSize="small" className="text-white" />
            </IconButton>
          </div>
          <div className="px-5 rounded-bl-xl rounded-br-xl shadow-xl py-2">
            <ul className="list-disc">
              {activities?.map((ac, index) => (
                <li key={ac}>
                  <span className="text-sm">{ac}</span>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => onRemoveActivity(index)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </li>
              ))}
              {activities && activities.length === 0 && (
                <Typography variant="body2" className="text-center">
                  Chọn hoạt động trong ngày{' '}
                </Typography>
              )}
            </ul>
            {activities && activities.length > 0 && (
              <>
                <hr className="border-dashed mb-3 " />
                <div className="flex gap-3 w-full justify-end">
                  <Button variant="contained" color="primary" size="small">
                    view 360
                  </Button>
                  <Button variant="contained" color="primary" size="small">
                    chi tiết
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ScheduleItem;
