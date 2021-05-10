import React from 'react';
import { Ellipsis } from './index';

const longName = "This is a really long name so you'll see the ellipsis";
const shortName = 'Short';

export const LongString = () => {
  return (
    <div data-testid="long-string">
      <Ellipsis style={{ width: 100 }}>{longName}</Ellipsis>
    </div>
  );
};

export const ShortString = () => {
  return (
    <div data-testid="short-string">
      <Ellipsis style={{ width: 100 }}>{shortName}</Ellipsis>
    </div>
  );
};
