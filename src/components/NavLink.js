import React from 'react';
import { Link } from 'react-router';

const NavLink = props => (
  <Link {...props} activeClassName="active" activeOnlyWhenExact />
);

export default NavLink;