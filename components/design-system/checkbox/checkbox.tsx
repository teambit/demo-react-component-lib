import React, { isValidElement } from 'react';
import styles from './checkbox.module.scss';
import { CheckboxIndicator } from './indicator';
import {
  CheckboxLabel as CheckboxLabelBase,
  CheckboxLabelProps as BaseProps,
} from '@learn-harmony/elements.checkbox.label';

export type CheckboxProps = BaseProps;

/** A styled checkbox with text. */
export function Checkbox(props: BaseProps) {
  const child =
    isValidElement(props.children) || !!props.children ? (
      props.children
    ) : (
      <span>{props.children}</span>
    );

  return (
    <CheckboxLabelBase
      {...props}
      className={styles.checkboxLabel}
      indicator={<CheckboxIndicator />}
    >
      {child}
    </CheckboxLabelBase>
  );
}
