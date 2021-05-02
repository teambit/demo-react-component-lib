import React from 'react';
import { letterBgColors, letterColors } from './index';

export const TextColors = () => {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return (
    <div>
      {letters.map((value) => (
        <div className={letterColors[value]}>{value}</div>
      ))}
    </div>
  );
};

export const BackgroundColors = () => {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return (
    <div>
      {letters.map((value) => (
        <div className={letterBgColors[value]}>{value}</div>
      ))}
    </div>
  );
};
