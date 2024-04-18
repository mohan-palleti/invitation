import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  useEffect(() => {
    const startConfetti = () => {
      // Configure confetti options
      const confettiConfig = {
        particleCount: 100, // Number of confetti pieces
        colors: [['#f00', '#0f0'], '#ffff00'], // Confetti colors (array of arrays or single colors)
      };

      Confetti.start(confettiConfig);
    };

    // Start confetti animation on component mount
    startConfetti();

    // Cleanup function (optional): Stop confetti on unmount (prevents memory leaks)
    return () => Confetti.stop();
  }, []);

  return (
    <div> {/* You can add content here if needed */} </div>
  );
};

export default ConfettiComponent;
