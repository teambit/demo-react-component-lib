import React from 'react';
import classNames from 'classnames';

import {
  headingFontSize,
  textFontSize,
} from '@learn-harmony/styles.sizes.size-definition';
import { primaryPalette } from '@learn-harmony/styles.colors.primary-color-palette';
import { bookFont } from '@learn-harmony/styles.fonts.book';
import texts from './texts.module.scss';

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
