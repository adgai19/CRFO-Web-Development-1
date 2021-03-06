import React from 'react';
import classNames from 'classnames/bind';
import StateCenterMenu from '../statelist';
import testCenter from '../../data/testCenters';
import Dropdown from '../stateListDropdown';

const cx = classNames.bind(require('./stateWiseList.module.css'));

export default function IndiaData(props) {
  const { onStateSelect, viewTestCenters, viewTowers } = props;

  // const handleTestCentersToggle = () => {
  //   props.onTestCenterToggle(!viewTestCenters);
  // };
  // const handleTowersToggle = () => {
  //   props.onTowersToggle(!viewTowers);
  // };

  const handleTestClick = (center) => {
    const selectedState = testCenter.find((location) => {
      return location.city === center;
    });
    onStateSelect(selectedState);
  };
  const stateReset = () => {
    props.handleStateReset();
  };
  return (
    <>
      <section className={cx('list-wrapper')}>
        <section className={cx('list-content')}>
          {/* <StateCenterMenu handleStateClick={handleTestClick} /> */}
          <Dropdown
            handleStateClick={handleTestClick}
            handleStateReset={stateReset}
          />
        </section>
      </section>
    </>
  );
}
