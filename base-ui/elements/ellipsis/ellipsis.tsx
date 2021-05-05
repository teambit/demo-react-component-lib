import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './ellipsis.module.scss';

export type EllipsisProps = {} & HTMLAttributes<HTMLDivElement>;

export const Ellipsis = (props: EllipsisProps) => {
  return (
    <div
      {...props}
      className={classnames(props.className, styles.ellipsisDiv)}
    />
  );
};
