import React, { FC } from 'react';

import { FaPlane } from 'react-icons/fa';

import ScheduleItem from './schedule-item';
import { DataSchedule } from '../service/type';

type Props = {
  schedule: DataSchedule;
  setSchedule: (_: DataSchedule) => void;
  setIndex: (_: number) => void;
};

const HomeWrapper: FC<Props> = ({ schedule, setIndex, setSchedule }) => {
  return (
    <React.Fragment>
      <div className="w-full relative flex gap-0 items-center">
        {/* The start */}
        <div className="w-14 h-14 rounded-full absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-0 bg-red-500">
          <FaPlane className="rotate-45 text-2xl fill-white" />
        </div>
        <div className="w-1/2 h-full border-r-4 border-red-500">
          <div className="invisible">
            <div className="relative h-[40px] flex items-center bg-orange-500 rounded-tl-xl rounded-tr-xl px-5 before:content-[''] before:border-[10px] before:border-solid before:border-transparent before:border-r-orange-500 before:absolute before:bottom-0 before:left-[-18px]">
              <p className="text-md uppercase text-white font-bold">
                lịch trình du lịch({schedule.dateFrom} - {schedule.dateTo})
              </p>
            </div>
            <div className="px-5 rounded-bl-xl rounded-br-xl shadow-xl py-2">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full border-l-4 border-red-500">
          <div className="w-11/12 float-right">
            <div className="relative h-[40px] flex items-center bg-orange-500 rounded-tl-xl rounded-tr-xl px-5 before:content-[''] before:border-[10px] before:border-solid before:border-transparent before:border-r-orange-500 before:absolute before:bottom-0 before:left-[-18px]">
              <p className="text-md uppercase text-white font-bold">
                lịch trình du lịch({schedule.dateFrom} - {schedule.dateTo})
              </p>
            </div>
            <div className="px-5 rounded-bl-xl rounded-br-xl shadow-xl py-2">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      {schedule.sched?.map((s, index) => (
        <ScheduleItem
          key={s.title}
          position={index % 2 === 0 ? 'right' : 'left'}
          title={`ngày: ${index + 1}(${s.title})`}
          activities={s.activities}
          onAddActivity={() => setIndex(index)}
          onRemoveActivity={(idx: number) => {
            const fakeSchedule = schedule;
            fakeSchedule.sched[index].activities.splice(idx, 1);
            setSchedule({ ...fakeSchedule });
          }}
        />
      ))}

      {/* The end */}
      <div className="w-full relative flex items-center justify-between">
        <div className="w-14 h-14 rounded-full absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-0 bg-red-500">
          <FaPlane className="rotate-[225deg] text-2xl fill-white" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeWrapper;
