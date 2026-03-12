import { useEffect, useState } from "react";
import { CountdownContainer, CountdownWrapper } from "./style";

interface CountdownProps {
  targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const secondInMs = 1000;
    const minuteInMs = secondInMs * 60;
    const hourInMs = minuteInMs * 60;
    const dayInMs = hourInMs * 24;

    const interval = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setDay(Math.floor(diff / dayInMs));
        setHour(Math.floor((diff % dayInMs) / hourInMs));
        setMinute(Math.floor((diff % hourInMs) / minuteInMs));
        setSecond(Math.floor((diff % minuteInMs) / secondInMs));
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const finished = day === 0 && hour === 0 && minute === 0 && second === 0;

  return (
    <>
      <CountdownContainer>
        <h2>Black Friday GeekStore</h2>
        <h3>Todos os produtos com até 50% de desconto!</h3>
        <CountdownWrapper>
          {finished ? (
            <span>Tempo esgotado!</span>
          ) : (
            <>
              <div>
                <span>{String(day).padStart(2, "0")}</span>
                <small>Dias</small>
              </div>
              <div>
                <span>{String(hour).padStart(2, "0")}</span>
                <small>Horas</small>
              </div>
              <div>
                <span>{String(minute).padStart(2, "0")}</span>
                <small>Minutos</small>
              </div>
              <div>
                <span>{String(second).padStart(2, "0")}</span>
                <small>Segundos</small>
              </div>
            </>
          )}
        </CountdownWrapper>
      </CountdownContainer>
    </>
  );
};

export default Countdown;
