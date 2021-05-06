import React from 'react';
import classNames from 'classnames';
import { Theme } from '@learn-harmony/design.styles.theme';
import { menuTransition } from '@learn-harmony/design.styles.transitions.menu-transition';
import { hoverable } from '@learn-harmony/design.styles.characteristics.hoverable';
import { Dropdown } from './dropdown';
import { Item } from './item';
import { dropdownList, dropdownListWithLongNames } from './dropdown.mock';

const classname = 'width: 800px';

const activeOption = {
  image: 'https://static.bit.dev/bit-logo.svg',
  name: 'teambit',
};
export function DropdownExample() {
  return (
    <Theme>
      <div data-testid="dropdown">
        <Dropdown
          menuClass={menuTransition}
          placeholder={false}
          placeholderTitle={<Item {...activeOption} />}
        >
          {dropdownList.map((listItem, index) => (
            <Item
              key={index}
              image={listItem.image}
              name={listItem.name}
              className={hoverable}
              isActive={activeOption.name === listItem.name}
            />
          ))}
        </Dropdown>
      </div>
    </Theme>
  );
}

export function DropdownExampleDisabled() {
  return (
    <Theme>
      <Dropdown
        disabled
        placeholder={false}
        placeholderTitle={<Item {...activeOption} />}
      >
        {dropdownList.map((listItem, index) => (
          <Item
            key={index}
            image={listItem.image}
            name={listItem.name}
            className={hoverable}
            isActive={activeOption.name === listItem.name}
          />
        ))}
      </Dropdown>
    </Theme>
  );
}

export function DropdownExampleWithLongNames() {
  return (
    <Theme>
      <Dropdown
        menuClass={classNames(menuTransition, classname)}
        style={{ maxWidth: '100%' }}
        placeholder={false}
        placeholderTitle={<Item {...activeOption} />}
      >
        {dropdownListWithLongNames.map((listItem, index) => (
          <Item
            key={index}
            image={listItem.image}
            name={listItem.name}
            className={hoverable}
            isActive={activeOption.name === listItem.name}
          />
        ))}
      </Dropdown>
    </Theme>
  );
}

DropdownExample.canvas = {
  height: 200,
  alignItems: 'flex-start',
};
DropdownExampleWithLongNames.canvas = {
  height: 200,
  alignItems: 'flex-start',
};
