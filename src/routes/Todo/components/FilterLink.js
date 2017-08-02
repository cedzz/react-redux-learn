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
        onClick()
      }}
    >
      {children}
    </a>
  )
};

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const store = this.context.store;
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


FilterLink.contextTypes = {
  store : React.PropTypes.object
};

export default FilterLink;
