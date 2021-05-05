import React from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

export type InputProps = {
  error: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = {
  error: boolean;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const Input = (props: InputProps) => {
  const { className, error, ...rest } = props;

  return (
    <input
      {...rest}
      data-error={error ? '' : undefined}
      className={classNames(className, styles.evaInput)}
    />
  );
};

export const TextArea = (props: TextareaProps) => {
  const { className, error, ...rest } = props;
  return (
    <textarea
      {...rest}
      data-error={error ? '' : undefined}
      className={classNames(className, styles.evaInput)}
    />
  );
};
