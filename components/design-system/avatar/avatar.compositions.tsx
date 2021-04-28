import React from 'react';
import { Theme } from '@learn-harmony/styles.theme-provider';
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
  <Theme>
    <DefaultAvatar size={32} account={accounts.defAccount} />
  </Theme>
);

export const OrganizationAvatarExample = () => (
  <Theme>
    <OrgAvatar size={32} account={accounts.orgAccount} />
  </Theme>
);

export const UserAvatarExample = () => (
  <Theme>
    <UserAvatar size={32} account={accounts.userAccount} />
  </Theme>
);

export const LargeAvatarExample = () => (
  <Theme>
    <OrgAvatar size={100} account={accounts.orgAccount} />
  </Theme>
);

export const NoSetIconOrgAvatar = () => (
  <Theme>
    <OrgAvatar size={32} account={accounts.noPicOrgAccount} />
  </Theme>
);

export const NoSetIconUserAvatar = () => (
  <Theme>
    <UserAvatar size={32} account={accounts.noPicUserAccount} />
  </Theme>
);

export const NoUserNameAvatarExample = () => (
  <Theme>
    <UserAvatar size={32} account={accounts.noNameAccount} />
  </Theme>
);

export const UserAvatarWithTooltipExample = () => (
  <Theme>
    <UserAvatar size={32} account={accounts.userAccount} showTooltip />
  </Theme>
);
