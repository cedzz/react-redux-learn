import React from 'react';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(filter)
      }}
    >
      {children}
    </a>
  )
};

class FilterLink extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return(
      <Link
        active={ props.filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type : 'SET_VISIBILITY_FILTER',
            filter : props.filter
          })
        }
      >
        {props.children}
      </Link>

    )
  }
}


export default FilterLink;
