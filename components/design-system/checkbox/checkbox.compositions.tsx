import React, { useState } from 'react';
import { Theme } from '@learn-harmony/styles.theme-provider';
import { Checkbox } from './checkbox';

export function Checked() {
  return (
    <Theme>
      <Checkbox defaultChecked> Checkmarbox with a label</Checkbox>
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
