import React from 'react';
import classNames from 'classnames';
import {
  headingFontSize,
  textFontSize,
} from '@learn-harmony/base-ui.styles.sizes.size-definition';
import { primaryPalette } from '@learn-harmony/base-ui.styles.colors.primary-color-palette';
import { bookFont } from '@learn-harmony/base-ui.styles.fonts.book';
import texts from './texts.module.scss';

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        primaryPalette,
        texts.defaults,
        props.className
      )}
    ></div>
  );
}
