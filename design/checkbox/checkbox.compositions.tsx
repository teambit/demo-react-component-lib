import React, { useState, CSSProperties } from 'react';
import { Theme } from '@learn-harmony/styles.theme-provider';
import { darkMode } from '@learn-harmony/styles.colors.dark-color-palette';
import { Checkbox } from './checkbox';

export function Checked() {
  return (
    <div data-testid="checked">
      <Theme>
        <Checkbox defaultChecked> A label</Checkbox>
      </Theme>
    </div>
  );
}

export function CheckedDark() {
  const style: CSSProperties = {
    backgroundColor: 'var(--bg-bedrock)',
    padding: 25,
  };
  return (
    <Theme className={darkMode}>
      <div style={style}>
        <Checkbox defaultChecked> A label</Checkbox>
      </div>
    </Theme>
  );
}

export function Unchecked() {
  return (
    <Theme>
      <Checkbox> Check mark box with a label</Checkbox>
    </Theme>
  );
}

export function ControlledCheckmarkBox() {
  const [state, setState] = useState(false);

  return (
    <Theme>
      <Checkbox
        onInputChanged={(e) => setState(e.target.checked)}
        checked={state}
      >
        {' '}
        Check mark box with a label
      </Checkbox>
      <div>→ {state ? 'checked' : 'unchecked'}</div>
    </Theme>
  );
}

export function DisabledCheckmarkBox() {
  return (
    <Theme>
      <Checkbox disabled>
        <span> disabled</span>
      </Checkbox>
    </Theme>
  );
}

export function DisabledAndChecked() {
  return (
    <Theme>
      <Checkbox disabled defaultChecked>
        <span> disabled and checked </span>
      </Checkbox>
    </Theme>
  );
}

export function Large() {
  return (
    <Theme>
      <Checkbox style={{ fontSize: 24 }}> large</Checkbox>
    </Theme>
  );
}

export function Small() {
  return (
    <Theme>
      <Checkbox style={{ fontSize: 12 }}> small</Checkbox>
    </Theme>
  );
}
