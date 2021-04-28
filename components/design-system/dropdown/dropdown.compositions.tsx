import React from 'react';
import classNames from 'classnames';
import { hoverable } from '@teambit/design.ui.hoverable';
import { menuTransition } from '@teambit/design.ui.css.menu-transition';
import { Dropdown } from './dropdown';
import { Item } from './item';
import { dropdownList, dropdownListWithLongNames } from './dropdown.mock';

const classname = 'width: 800px'

const activeOption = {
  image: 'https://static.bit.dev/bit-logo.svg',
  name: 'teambit',
};
export function DropdownExample() {
  return (
    <Dropdown menuClass={menuTransition} placeholder={false} placeholderTitle={<Item {...activeOption} />}>
      {dropdownList.map((listItem, index) => (
        <Item
          key={index}
          className={hoverable}
          image={listItem.image}
          name={listItem.name}
          isActive={activeOption.name === listItem.name}
        />
      ))}
    </Dropdown>
  );
}

export function DropdownExampleDisabled() {
  return (
    <Dropdown disabled placeholder={false} placeholderTitle={<Item {...activeOption} />}>
      {dropdownList.map((listItem, index) => (
        <Item
          key={index}
          className={hoverable}
          image={listItem.image}
          name={listItem.name}
          isActive={activeOption.name === listItem.name}
        />
      ))}
    </Dropdown>
  );
}

export function DropdownExampleWithLongNames() {
  return (
    <Dropdown menuClass={classNames(menuTransition, classname)} style={{maxWidth: '100%'}} placeholder={false} placeholderTitle={<Item {...activeOption} />}>
      {dropdownListWithLongNames.map((listItem, index) => (
        <Item
          key={index}
          className={hoverable}
          image={listItem.image}
          name={listItem.name}
          isActive={activeOption.name === listItem.name}
        />
      ))}
    </Dropdown>
  );
}


DropdownExample.canvas = {
    height: 200,
    alignItems: 'flex-start',
}
DropdownExampleWithLongNames.canvas = {
    height: 200,
    alignItems: 'flex-start',
}