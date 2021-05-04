import React from 'react';
import classNames from 'classnames';
import { menuTransition } from '@learn-harmony/base-ui.styles.transitions.menu-transition';
import { hoverable } from '@learn-harmony/base-ui.styles.characteristics.hoverable';
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
  );
}

export function DropdownExampleDisabled() {
  return (
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
  );
}

export function DropdownExampleWithLongNames() {
  return (
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
