import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = props => {
  return (
    <nav>
      <ul className={styles.NavigationItems}>
        <NavigationItem>Diary</NavigationItem>
        <NavigationItem>Show All Diary</NavigationItem>
      </ul>
    </nav>
  );
};

export default NavigationItems;
