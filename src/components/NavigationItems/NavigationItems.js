import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
  return (
    <nav>
      <ul>
        <NavigationItem>Diary</NavigationItem>
        <NavigationItem>Show All Diary</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
