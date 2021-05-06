import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  headingFontSize,
  textFontSize,
} from '@learn-harmony/design.styles.sizes.size-definition';
import { primaryPalette } from '@learn-harmony/design.styles.colors.primary-color-palette';
import { bookFont } from '@learn-harmony/design.styles.fonts.book';
// import texts from './texts.module.scss';
import {
  Theme as BaseTheme,
  ThemeProps,
} from '@learn-harmony/base-ui.theme-provider';
// import sizes from './sizes.module.scss';
// import global from './global.module.scss';
// import colors from './colors.module.scss';

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