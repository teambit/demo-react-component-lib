---
labels: ['react', 'css', 'colors']
description: 'Colors and letter css component'
---

import { letterBgColors, letterColors } from './index';

A CSS component that make a color for the received letter, can be used for a background-color or a text color.

#### Background color

Select a different `letterBgColors` property to change the background color:

```jsx live
() => {
  return (
    <div>
      <div className={letterBgColors.b}>bbb</div>
    </div>
  );
};
```

#### Text color

Select a different `letterColors` property to change the text color:

```jsx live
() => {
  return (
    <div>
      <div className={letterColors.b}>bbb</div>
    </div>
  );
};
```
