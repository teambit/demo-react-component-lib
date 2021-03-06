import React from 'react';
import classnames from 'classnames';
import styles from './indicator.module.scss';

export type CheckboxIndicatorProps = React.HTMLAttributes<HTMLSpanElement>;

export const classes = {
  checkedIndicator: styles.checkedIndicator,
  defaultCheckbox: styles.defaultCheckbox,
};

export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  const { className = classes.defaultCheckbox } = props;

  return (
    <span
      {...props}
      className={classnames(className, classes.checkedIndicator)}
    />
  );
}
