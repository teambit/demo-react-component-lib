import React from 'react';
import { Button } from './button';
import { Theme } from '@learn-harmony/base-ui.theme-provider';

export const BasicButton = () => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <Button onClick={() => alert('on click')}>Click</Button>
  </div>
);

export const ThemedButton = () => (
  <Theme>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button onClick={() => alert('on click')}>Click</Button>
    </div>
  </Theme>
);
