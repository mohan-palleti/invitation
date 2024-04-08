import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date('2024-04-21T23:00:00')); // Set target date and time
  const [difference, setDifference] = useState(null);

  useEffect(() => {
    const calculateDifference = () => {
      const timeLeft = targetDate.getTime() - currentTime.getTime();
      setDifference(timeLeft);
    };

    const intervalId = setInterval(calculateDifference, 1000); // Update every second

    calculateDifference(); // Run initially

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentTime, targetDate]);

  const renderCountdown = () => {
    if (difference <= 0) {
      return <div>Time's Up! 🎉</div>;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return (
      <div>
        {days > 0 && <span>{days} Days </span>}
        {hours > 0 && <span>{hours.toString().padStart(2, '0')} hrs </span>}
        {minutes > 0 && <span>{minutes.toString().padStart(2, '0')} mins </span>}
        {seconds > 0 && <span>{seconds.toString().padStart(2, '0')} secs</span>}
      </div>
    );
  };

  return (
    <div className="countdown-timer">
      {renderCountdown()}
    </div>
  );
};

export default CountdownTimer;
