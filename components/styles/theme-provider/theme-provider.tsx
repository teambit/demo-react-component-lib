import React from 'react';
import classNames from 'classnames';

import {
  headingFontSize,
  textFontSize,
} from '@learn-harmony/styles.sizes.size-definition';
// import { shadowTheme } from '@teambit/base-ui.theme.shadow-definition';
import { primaryPalette } from '@learn-harmony/styles.colors.primary-color-palette';
// import { brands } from '@teambit/base-ui.theme.brand-definition';
// import { headingMargins } from '@teambit/base-ui.theme.heading-margin-definition';
import { bookFont } from '@learn-harmony/styles.fonts.book';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        // shadowTheme,
        primaryPalette,
        // brands,
        // headingMargins,
        texts.defaults,
        props.className
      )}
    ></div>
  );
}
