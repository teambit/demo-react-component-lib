import React from 'react';
import classnames from 'classnames';
import styles from './hidden.module.scss';

export type HiddenCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

/** Hidden but interactive checkbox */
export function HiddenCheckbox(props: HiddenCheckboxProps) {
  return (
    <input
      {...props}
      type="checkbox"
      className={classnames(props.className, styles.hidden)}
    />
  );
}
