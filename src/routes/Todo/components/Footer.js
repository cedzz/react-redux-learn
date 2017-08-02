import React from 'react';
import FilterLink from './FilterLink';


const Footer = ({store}) => {

  return (
    <p>
      <FilterLink
        filter="SHOW_ALL"
        store={store}
      >
        ALL
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_ACTIVE"
        store={store}
      >
        ACTIVE
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_COMPLETED"
        store={store}
      >
        COMPLETED
      </FilterLink>
    </p>
  )
};

export default Footer;
