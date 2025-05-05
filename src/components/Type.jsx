import React, { useState, useEffect } from 'react';

const Type = () => {
  const texts = [
    "Digital Marketing Executive",
    "Webdeveloper",
    "Graphic Designer"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div style={{ fontSize: '24px', fontFamily: 'monospace', textAlign: 'center', marginTop: '50px' }}>
      {displayedText}
      <span style={{ borderRight: '2px solid', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>

      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: black }
        }
      `}</style>
    </div>
  );
};

export default Type;
