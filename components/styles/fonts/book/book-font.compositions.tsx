import React from 'react';
import { bookFont } from './index';

export const Normal = () => {
  return (
    <div data-testid="normal" className={bookFont}>
      <div style={{ fontWeight: 'normal' }}>
        “If there’s no meaning in it,” said the King, “that saves a world of
        trouble, you know, as we needn’t try to find any.”
      </div>
    </div>
  );
};

export const Bold = () => {
  return (
    <div data-testid="bold" className={bookFont}>
      <div style={{ fontWeight: 'bold' }}>
        “If there’s no meaning in it,” said the King, “that saves a world of
        trouble, you know, as we needn’t try to find any.”
      </div>
    </div>
  );
};

export const Bolder = () => {
  return (
    <div data-testid="bolder" className={bookFont}>
      <div style={{ fontWeight: 800 }}>
        “If there’s no meaning in it,” said the King, “that saves a world of
        trouble, you know, as we needn’t try to find any.”
      </div>
    </div>
  );
};

export const Italic = () => {
  return (
    <div data-testid="italic" className={bookFont}>
      <div style={{ fontStyle: 'italic' }}>
        “If there’s no meaning in it,” said the King, “that saves a world of
        trouble, you know, as we needn’t try to find any.”
      </div>
    </div>
  );
};

export const BoldAndItalic = () => {
  return (
    <div data-testid="bold-and-italic" className={bookFont}>
      <div style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
        “If there’s no meaning in it,” said the King, “that saves a world of
        trouble, you know, as we needn’t try to find any.”
      </div>
    </div>
  );
};

export const BolderAndItalic = () => {
  return (
    <div data-testid="bold-and-italic" className={bookFont}>
      <div style={{ fontWeight: 800, fontStyle: 'italic' }}>
        “If there’s no meaning in it,” said the King, “that saves a world of
        trouble, you know, as we needn’t try to find any.”
      </div>
    </div>
  );
};
