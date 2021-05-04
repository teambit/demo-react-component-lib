import React from 'react';
import classNames from 'classnames';

import BaseButton, {
  ButtonProps as BaseProps,
} from '@learn-harmony/elements.inputs.button';

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

/**
 * Button component with click effect and built in loader.
 * Supports all props from native html button.
 * @name Button
 * @example
 * 	<Button importance="cta" elevation="medium" loading loader={<Loader/>}>Click me!</Button>
 */
export function Button({
  className,
  importance = 'normal',
  elevation = 'low',
  ...rest
}: ButtonProps) {
  return (
    <BaseButton
      className={classNames(styles.Button, elevations[elevation], className)}
      data-bit-id="teambit.evangelist/elements/button"
      data-variation={importance}
      {...rest}
    />
  );
}

Button.defaultProps = {
  importance: 'normal', //TODO
  elevation: 'low',
};
