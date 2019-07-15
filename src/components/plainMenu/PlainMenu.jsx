import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './PlainMenu.scss';

class PlainMenu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      menu: PropTypes.array,
      text: PropTypes.string,
    })).isRequired,
    float: PropTypes.oneOf(['left', 'right']),
    backLabel: PropTypes.string,
    menuItemClassName: PropTypes.string,
  }

  static defaultProps = {
    float: 'left',
    backLabel: 'Back',
  }

  state = {
    path: [],
    menu: [],
  }

  componentDidMount() {
    this.setState({ menu: this.getMenu(this.state.path) });
  }

  getMenu(path) {
    let menu = this.props.menu;
    for (const name of path) {
      menu = menu.find(menuItem => menuItem.name === name).menu;
    }
    if (menu !== this.props.menu) {
      menu = [...menu, { name: BACK_MENU_ITEM_NAME, text: this.props.backLabel }];
    }
    return menu;
  }

  get fullDuration() {
    return ANIMATION_DURATION * (this.state.menu.length / 2 + 1);
  }

  onMenuItemClick = item => {
    if (this.state.animating === true) {
      return;
    }

    if (item.name === BACK_MENU_ITEM_NAME) {
      this.setPath(this.state.path.slice(0, this.state.path.length - 1));
    } else if (item.menu) {
      this.setPath([...this.state.path, item.name]);
    } else if (typeof item.onClick === 'function') {
      item.onClick();
    }
  }

  setPath = path => {
    if (this.state.animating === true) {
      return;
    }
    this.setState({
      animating: true,
      menu: [],
    });

    setTimeout(() => {
      this.setState({
        path,
        animating: false,
        menu: this.getMenu(path),
      });
    }, this.fullDuration + 50);
  }

  renderMenuItem = (item, index) => (
    <CSSTransition
      key={item.name}
      classNames="menu-item"
      timeout={this.fullDuration}
    >
      <div
        className={item.menu ? 'menu-item menu-group' : 'menu-item'}
        onClick={() => this.onMenuItemClick(item)}
        role="button"
        tabIndex="0"
        style={{
          transitionDelay: `0ms, ${ANIMATION_DURATION * index / 2}ms`,
        }}
      >
        <span className="menu-item-text">{item.text}</span>
      </div>
    </CSSTransition>
  )

  render() {
    // eslint-disable-next-line no-unused-vars
    const { menu, float, backLabel, menuItemClassName, ...other } = this.props;
    return (
      <TransitionGroup className="plain-menu" {...other} >
        {this.state.menu.map(this.renderMenuItem)}
      </TransitionGroup>
    );
  }
}

const BACK_MENU_ITEM_NAME = '__back__';
const ANIMATION_DURATION = 250;

export default PlainMenu;