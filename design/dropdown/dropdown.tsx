import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@learn-harmony/base-ui.surfaces.drawer';
import { Menu } from './menu';
import styles from './dropdown.module.scss';
import { DownArrow } from './down-arrow';

export type DropdownProps = {
  /**
   * children to be rendered in the menu
   */
  children: ReactNode;
  /**
   * the title shows on the left and on the right there is an arrow icon
   */
  placeholderTitle?: ReactNode;
  /**
   * default placeholder override class
   */
  placeholderClass?: string;
  /**
   * override placeholder to be used instead of the default one
   */
  placeholder?: ReactNode; // TODO - how can I make this optional if its required in DrawerProps?
  /**
   * menu override class
   */
  menuClass?: string;

  /**
   * disabled state
   */
  disabled?: boolean;
} & DrawerProps;

/**
 *
 * A generic and designed dropdown
 */
export function Dropdown({
  placeholderTitle,
  placeholder,
  children,
  menuClass,
  disabled,
  className,
  placeholderClass,
  open,
  ...rest
}: DropdownProps) {
  const preventOpenIfDisabled = disabled ? false : open;
  const title = placeholder || (
    <DefaultPlaceholder
      className={classNames(disabled && styles.disabled, placeholderClass)}
    >
      {placeholderTitle}
    </DefaultPlaceholder>
  );
  return (
    <Drawer
      open={preventOpenIfDisabled}
      className={classNames(disabled && styles.disabled, className)}
      {...rest}
      placeholder={title}
    >
      <Menu className={menuClass}>{children}</Menu>
    </Drawer>
  );
}

export type DefaultPlaceholderProps = {} & HTMLAttributes<HTMLDivElement>;

export function DefaultPlaceholder({
  children,
  className,
  ...rest
}: DefaultPlaceholderProps) {
  return (
    <div {...rest} className={classNames(styles.defaultPlaceholder, className)}>
      {children}
      <DownArrow />
    </div>
  );
}
