import React from 'react';
import { Theme } from '@learn-harmony/design.styles.theme';
import styles from './hoverable.module.scss';

export const HoverableDiv = () => {
  return (
    <Theme>
      <div data-testid="hoverable" className={styles.hoverable}>
        hoverable div
      </div>
    </Theme>
  );
};
