import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './Timer.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

const Timer = ({ data, setDinamicBurnCal, dinamicBurnCal, setDinamicTime }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const children = ({ remainingTime }) => {
    const duration = data.time * 60;

    setDinamicBurnCal(() => {
      const time = (duration - remainingTime) / duration;

      const burnCal = time * data.burnedCalories;
      return Math.round(burnCal);
    });
    setDinamicTime(() => duration - remainingTime);

  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  };
  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <CountdownCircleTimer
        strokeWidth={2}
        size={124}
        isPlaying={isPlaying}
        duration={data.time * 60}
        colors={'#e6533c'}
        remainingTime={data.time * 60}
      >
        {({ remainingTime }) => (
          <div style={{ color: '#fff' }} role="timer" aria-live="assertive">
            {children({ remainingTime })}
          </div>
        )}
      </CountdownCircleTimer>
      <TimerBtn onClick={handlePlay}>
        <PlayIcon>
          <use
            href={
              isPlaying
                ? `${sprite}#icon-pause`
                : `${sprite}#icon-play`
            }
          ></use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:<TimerSub>{dinamicBurnCal}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;
