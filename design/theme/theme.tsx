import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import 'reset-css';
import { Theme as BaseTheme } from '@teambit/base-ui.theme.theme-provider';
import { Roboto } from '@teambit/base-ui.theme.fonts.roboto';
import sizes from './sizes.module.scss';
import global from './global.module.scss';
import colors from './colors.module.scss';

export type ThemeProps = {} & HTMLAttributes<HTMLDivElement>;

export function Theme({ children, className, ...rest }: ThemeProps) {
  return (
    <BaseTheme
      {...rest}
      className={classNames(
        className,
        sizes.heading,
        global.overrides,
        colors.status
      )}
    >
      <Roboto />
      {children}
    </BaseTheme>
  );
}
