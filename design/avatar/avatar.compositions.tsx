import React from 'react';
import { Theme } from '@learn-harmony/base-ui.styles.theme-provider';
import { DefaultAvatar, OrgAvatar, UserAvatar } from './index';

const accounts = {
  defAccount: {
    name: 'defaultAccount',
    type: 'default',
    profileImage: 'https://static.bit.dev/harmony/support.svg',
  },
  orgAccount: {
    name: 'defaultAccount',
    type: 'organization',
    profileImage: 'https://static.bit.dev/bit-logo.svg',
  },
  userAccount: {
    displayName: 'display name',
    name: 'defaultAccount',
    type: 'user',
    profileImage: 'https://static.bit.dev/harmony/github.svg',
  },
  noPicOrgAccount: { name: 'defaultAccount', type: 'organization' },
  noPicUserAccount: { name: 'defaultAccount', type: 'user' },
  noNameAccount: { name: '', type: 'user' },
};

export const DefaultAvatarExample = () => (
  <div data-testid="default">
    <Theme>
      <DefaultAvatar size={32} account={accounts.defAccount} />
    </Theme>
  </div>
);

export const OrganizationAvatarExample = () => (
  <div data-testid="org">
    <Theme>
      <OrgAvatar size={32} account={accounts.orgAccount} />
    </Theme>
  </div>
);

export const UserAvatarExample = () => (
  <div data-testid="user">
    <Theme>
      <UserAvatar size={32} account={accounts.userAccount} />
    </Theme>
  </div>
);

export const LargeAvatarExample = () => (
  <div data-testid="large">
    <Theme>
      <OrgAvatar size={100} account={accounts.orgAccount} />
    </Theme>
  </div>
);

export const NoSetIconOrgAvatar = () => (
  <div data-testid="org-no-set-icon">
    <Theme>
      <OrgAvatar size={32} account={accounts.noPicOrgAccount} />
    </Theme>
  </div>
);

export const NoSetIconUserAvatar = () => (
  <div data-testid="user-no-set-icon">
    <Theme>
      <UserAvatar size={32} account={accounts.noPicUserAccount} />
    </Theme>
  </div>
);

export const NoUserNameAvatarExample = () => (
  <div data-testid="no-user-name">
    <Theme>
      <UserAvatar size={32} account={accounts.noNameAccount} />
    </Theme>
  </div>
);

export const UserAvatarWithTooltipExample = () => (
  <div data-testid="with-tooltup">
    <Theme>
      <UserAvatar size={32} account={accounts.userAccount} showTooltip />
    </Theme>
  </div>
);
