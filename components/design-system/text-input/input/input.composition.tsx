import React from 'react';
import { Theme } from '@learn-harmony/styles.theme-provider';
import { darkMode } from '@learn-harmony/styles.colors.dark-color-palette';
import { Input, TextArea } from './input';

export const InputExample = () => (
  <Theme>
    <Input error={false} placeholder="enter text..." data-testid="test-input" />
  </Theme>
);

export const InputWithError = () => (
  <Theme>
    <Input error={true} data-testid="test-input" />
  </Theme>
);

export const TextAreaExample = () => (
  <Theme>
    <TextArea
      error={false}
      placeholder="multiline text..."
      data-testid="test-textarea"
    />
  </Theme>
);

export const TextAreaWithError = () => (
  <Theme>
    <TextArea error={true} data-testid="test-textarea" />
  </Theme>
);
