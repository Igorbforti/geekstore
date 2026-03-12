import { useEffect, useState } from "react";
import {
  CountdownContainer,
  CountdownWrapper,
} from "./style";

interface CountdownProps {
  targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const countDown = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDown - now;

      if (diff > 0) {
        setDay(Math.floor(diff / day));
        setHour(Math.floor((diff % day) / hour));
        setMinute(Math.floor((diff % hour) / minute));
        setSecond(Math.floor((diff % minute) / second));
      } else {
        clearInterval(interval);
      }
    }, second);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <CountdownContainer>
        <h2>Black Friday GeekStore</h2>
        <h3>Todos os produtos com até 50% de desconto!</h3>
        <CountdownWrapper>
          <div>
            <span>{day <= 9 ? "0" + day : day}</span>
            <small>Dias</small>
          </div>
          <div>
            <span>{hour <= 9 ? "0" + hour : hour}</span>
            <small>Horas</small>
          </div>
          <div>
            <span>{minute <= 9 ? "0" + minute : minute}</span>
            <small>Minutos</small>
          </div>
          <div>
            <span>{second <= 9 ? "0" + second : second}</span>
            <small>Segundos</small>
          </div>
        </CountdownWrapper>
      </CountdownContainer>
    </>
  );
};

export default Countdown;
