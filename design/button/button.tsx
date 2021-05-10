import React from 'react';
import classNames from 'classnames';

import {
  Button as BaseButton,
  ButtonProps as BaseProps,
} from '@learn-harmony/base-ui.elements.inputs.button';

import styles from './button.module.scss';
import elevations from './elevations.module.scss';

export type ButtonProps = {
  /**
   * style the button with shadow and click effect.
   */
  elevation?: 'none' | 'low' | 'medium' | 'high';
  /**
   * style variance ('cta', 'normal')
   */
  importance?: 'normal' | 'ghost' | 'cta' | 'muted';
} & BaseProps;

export const Button = ({
  className,
  importance = 'normal',
  elevation = 'low',
  ...rest
}: ButtonProps) => {
  return (
    <BaseButton
      className={classNames(styles.Button, elevations[elevation], className)}
      data-variation={importance}
      {...rest}
    />
  );
};

Button.defaultProps = {
  importance: 'normal',
  elevation: 'low',
};
