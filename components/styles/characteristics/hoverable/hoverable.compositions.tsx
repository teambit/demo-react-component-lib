import React from 'react';
import { Theme } from '@learn-harmony/styles.theme-provider';
import styles from './hoverable.module.scss';

export const HoverableButton = () => {
  return (
    <Theme>
      <button className={styles.hoverable}>hoverable button</button>
    </Theme>
  );
};
