import React from 'react';
import FilterLink from './FilterLink';


const Footer = ({
  visibilityFilter, onFilterClick
}) => {

  return (
    <p>
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        ALL
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        ACTIVE
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        COMPLETED
      </FilterLink>
    </p>
  )
};

export default Footer;
