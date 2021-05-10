import classNames from 'classnames';
import React from 'react';

import { AccountObj } from './avatar';
import styles from './styles.module.scss';

type DefaultAvatarProps = {
  account?: AccountObj;
  size: number;
  imageSize?: number;
  fontSize?: number;
  className?: string;
  imgClassName?: string;
  // hideTooltip?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function DefaultAvatar(props: DefaultAvatarProps) {
  const { size, className, ...rest } = props;
  return (
    <div
      className={classNames(styles.default, styles.avatar, className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size * 0.35}px`,
        lineHeight: `${size}px`,
      }}
      {...rest}
    >
      ?
    </div>
  );
}
