import React from 'react';
import { render } from '@testing-library/react';
import {
  DefaultAvatarExample,
  OrganizationAvatarExample,
  UserAvatarExample,
  LargeAvatarExample,
  NoSetIconOrgAvatar,
  NoSetIconUserAvatar,
  NoUserNameAvatarExample,
} from './avatar.compositions';

describe('avatar', () => {
  test('default should render', () => {
    const { getByTestId } = render(<DefaultAvatarExample />);
    const avatar = getByTestId('default');
    expect(avatar).toBeTruthy();
  });
  test('org avatar should render', () => {
    const { getByTestId } = render(<OrganizationAvatarExample />);
    const avatar = getByTestId('org');
    expect(avatar).toBeTruthy();
  });
  test('user avatar should render', () => {
    const { getByTestId } = render(<UserAvatarExample />);
    const avatar = getByTestId('user');
    expect(avatar).toBeTruthy();
  });
  test('large avatar should render', () => {
    const { getByTestId } = render(<LargeAvatarExample />);
    const avatar = getByTestId('large');
    expect(avatar).toBeTruthy();
  });
  test('org avatar with no icon set should render', () => {
    const { getByTestId } = render(<NoSetIconOrgAvatar />);
    const avatar = getByTestId('org-no-set-icon');
    expect(avatar).toBeTruthy();
  });
  test('user avatar with no icon set should render', () => {
    const { getByTestId } = render(<NoSetIconUserAvatar />);
    const avatar = getByTestId('user-no-set-icon');
    expect(avatar).toBeTruthy();
  });
});
