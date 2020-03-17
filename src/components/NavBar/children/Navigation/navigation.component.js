import React from 'react';
import { NavLink } from 'react-router-dom';
import 'navigation_viade.css';

type Props = {
  navigation: Object
};

const Navigation = ({ navigation }: Props) => (
  <nav role="navigation" className="nav nav__primary">
    <ul>
      {navigation &&
        navigation.map(item => (
          <li key={item.id} data-testid="item">
            <NavLink to={item.to} className="viade-navLink" activeClassName="viade-navLink-active active">
              <span className="icon">
                <img
                  src={item.icon}
                  alt={item.id}
                  className="nav-icon"
                  width="24px"
                  height="20px"
                  style={{ width: '24px' }}
                />
              </span>
              <span className="viade-navSpan label">{item.label}</span>
            </NavLink>
          </li>
        ))}
    </ul>
  </nav>
);

export default Navigation;
