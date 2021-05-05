import React from 'react';
import { Theme } from './theme-provider';
import { CheckBox } from '@learn-harmony/design.check-box';
import { darkMode } from '@learn-harmony/base-ui.styles.colors.dark-color-palette';

export const DarkMode = () => {
  const style = {
    backgroundColor: 'var(--bg-bedrock)',
    padding: 25,
  };
  return (
    <Theme className={darkMode}>
      <div style={style}>
        <CheckBox defaultChecked> A label</CheckBox>
      </div>
    </Theme>
  );
};
