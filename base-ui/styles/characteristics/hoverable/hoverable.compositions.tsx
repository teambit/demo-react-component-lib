import React from 'react';
import { Theme } from '@learn-harmony/base-ui.styles.theme-provider';
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
