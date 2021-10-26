import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
      <section className="flex">
        <section className="flex w-full justify-center items-center">
          <div className="flex">
            <section>
              <p className="text-2xl sm:text-6xl">{timerDays}</p>
              <small>Days</small>
            </section>
            <span className="text-3xl sm:text-6xl ml-4 sm:ml-8 mr-4 sm:mr-8">
              :
            </span>
            <section>
              <p className="text-2xl sm:text-6xl">{timerHours}</p>
              <small>Hours</small>
            </section>
            <span className="text-3xl sm:text-6xl ml-4 sm:ml-8 mr-4 sm:mr-8">
              :
            </span>
            <section>
              <p className="text-2xl sm:text-6xl">{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span className="text-3xl sm:text-6xl ml-4 sm:ml-8 mr-4 sm:mr-8">
              :
            </span>
            <section>
              <p className="text-2xl sm:text-6xl">{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
