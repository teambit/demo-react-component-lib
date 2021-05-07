import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  headingFontSize,
  textFontSize,
} from '@learn-harmony/design.styles.sizes.size-definition';
import { primaryPalette } from '@learn-harmony/design.styles.colors.primary-color-palette';
import { bookFont } from '@learn-harmony/design.styles.fonts.book';
import {
  Theme as BaseTheme,
  ThemeProps as BaseThemeProps,
} from '@learn-harmony/base-ui.theme-provider';

export type ThemeProps = {} & BaseThemeProps;

export const Theme = ({ children, className, ...rest }: ThemeProps) => {
  return (
    <BaseTheme
      {...rest}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        primaryPalette,
        className
      )}
    >
      {children}
    </BaseTheme>
  );
};
