import React, { useState } from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Checkbox } from './checkbox';

export function Checked() {
  return (
    <ThemeCompositions>
      <Checkbox defaultChecked> Checkmarbox with a label</Checkbox>
    </ThemeCompositions>
  );
}

export function Unchecked() {
  return (
    <ThemeCompositions>
      <Checkbox> Check mark box with a label</Checkbox>
    </ThemeCompositions>
  );
}

export function ControlledCheckmarkBox() {
  const [state, setState] = useState(false);

  return (
    <ThemeCompositions>
      <Checkbox
        onInputChanged={(e) => setState(e.target.checked)}
        checked={state}
      >
        {' '}
        Check mark box with a label
      </Checkbox>
      <div>→ {state ? 'checked' : 'unchecked'}</div>
    </ThemeCompositions>
  );
}

export function DisabledCheckmarkBox() {
  return (
    <ThemeCompositions>
      <Checkbox disabled>
        <span> disabled</span>
      </Checkbox>
    </ThemeCompositions>
  );
}

export function DisabledAndChecked() {
  return (
    <ThemeCompositions>
      <Checkbox disabled defaultChecked>
        <span> disabled and checked </span>
      </Checkbox>
    </ThemeCompositions>
  );
}

export function Large() {
  return <Checkbox style={{ fontSize: 24 }}> large</Checkbox>;
}

export function Small() {
  return <Checkbox style={{ fontSize: 12 }}> small</Checkbox>;
}
