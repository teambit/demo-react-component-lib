import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Ellipsis } from '@learn-harmony/base-ui.elements.ellipsis';
import { UserAvatar } from '@learn-harmony/design.avatar';
import styles from './item.module.scss';

export type ItemProps = {
  image?: string;
  name: string;
  isActive?: boolean;
  accountType?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Item({
  image,
  name,
  className,
  isActive,
  accountType = 'user',
  ...rest
}: ItemProps) {
  return (
    <div
      {...rest}
      className={classNames(styles.item, isActive && styles.active, className)}
    >
      {/* TODO - add support for profile image and define what we want for org avatars */}
      <UserAvatar size={20} account={{ profileImage: image }} />
      <Ellipsis>{name}</Ellipsis>
    </div>
  );
}
