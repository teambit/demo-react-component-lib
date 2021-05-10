import { RefObject } from 'react';
import { useClickOutside } from './use-click-outside';

export type ClickOutsideProps = {
  targetRef: RefObject<HTMLElement>;
  handler: (event: MouseEvent | TouchEvent) => void;
  enabled?: boolean;
};

export function ClickOutside({
  targetRef,
  handler,
  enabled,
}: ClickOutsideProps) {
  useClickOutside(targetRef, handler, enabled);

  return null;
}
