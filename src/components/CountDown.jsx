import React, { useState, useEffect } from "react";
import "../styles/countDownStyles.css"; // Import CSS for styling

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2024-04-22T03:00:00").getTime();

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-content">
        <div className="countdown-item">
          <span>{countdown.days}</span>
          <span>Days</span>
        </div>
        <div className="countdown-item">
          <span>{countdown.hours}</span>
          <span>Hours</span>
        </div>
        <div className="countdown-item">
          <span>{countdown.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="countdown-item">
          <span>{countdown.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
