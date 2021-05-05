import React from 'react';
import { Theme } from './theme';
import { CheckBox } from '@learn-harmony/design.check-box';
import { darkMode } from '@learn-harmony/base-ui.styles.colors.dark-color-palette';
import { Button } from '@learn-harmony/design.button';

export const LightThemedLabel = () => {
  return (
    <div>
      <Theme>
        <CheckBox defaultChecked> A label</CheckBox>
      </Theme>
    </div>
  );
};

export const DarkThemedLabel = () => {
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

export const LightThemedButton = () => {
  return (
    <Theme>
      <Button importance="ghost" style={{ width: 120 }}>
        Update
      </Button>
    </Theme>
  );
};

export const DarkThemedButton = () => {
  return (
    <Theme className={darkMode}>
      <Button importance="ghost" style={{ width: 120 }}>
        Update
      </Button>
    </Theme>
  );
};
