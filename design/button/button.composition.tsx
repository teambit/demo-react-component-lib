import React from 'react';
import { Theme } from '@learn-harmony/design.styles.theme';
import { darkMode } from '@learn-harmony/design.styles.colors.dark-color-palette';
import { Button } from './button';

export const CallToActionButton = ({ ...rest }) => {
  return (
    <Theme>
      <Button importance="cta" style={{ width: 120 }} {...rest}>
        Submit
      </Button>
    </Theme>
  );
};

export const MainButton = () => {
  return (
    <Theme>
      <Button importance="ghost" style={{ width: 120 }}>
        Update
      </Button>
    </Theme>
  );
};

export const MainButtonDarkTheme = () => {
  return (
    <Theme className={darkMode}>
      <Button importance="ghost" style={{ width: 120 }}>
        Update
      </Button>
    </Theme>
  );
};

export const LightButton = ({ ...rest }) => {
  return (
    <Theme>
      <Button style={{ width: 120 }} {...rest}>
        learn more
      </Button>
    </Theme>
  );
};

export const CallToActionLoading = () => {
  return (
    <Theme>
      <Button importance="cta" loading style={{ width: 120 }}>
        Submit
      </Button>
    </Theme>
  );
};

export const Loading = () => {
  return (
    <Theme>
      <Button importance="ghost" loading style={{ width: 120 }}>
        Update
      </Button>
    </Theme>
  );
};

export const LightButtonLoading = () => {
  return (
    <Theme>
      <Button loading style={{ width: 120 }}>
        Learn more
      </Button>
    </Theme>
  );
};

export const CallToActionButtonDisabled = ({ ...rest }) => {
  return (
    <Theme>
      <Button importance="cta" style={{ width: 120 }} {...rest} disabled>
        Submit
      </Button>
    </Theme>
  );
};

export const MainButtonDisabled = () => {
  return (
    <Theme>
      <Button importance="ghost" style={{ width: 120 }} disabled>
        Update
      </Button>
    </Theme>
  );
};

export const LightButtonDisabled = ({ ...rest }) => {
  return (
    <Theme>
      <Button style={{ width: 120 }} {...rest} disabled>
        learn more
      </Button>
    </Theme>
  );
};

const compositions = [
  CallToActionButton,
  MainButton,
  LightButton,
  CallToActionLoading,
  Loading,
  LightButtonLoading,
];
// @ts-ignore
compositions.map((comp) => (comp.canvas = { height: 90 }));
