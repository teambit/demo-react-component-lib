import React from 'react';
import 'reset-css';
import classnames from 'classnames';
import styles from './texts.module.scss';

export type ThemeProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Theme = ({ className, ...props }: ThemeProps) => {
  return (
    <div {...props} className={classnames(styles.defaults, className)}></div>
  );
};
