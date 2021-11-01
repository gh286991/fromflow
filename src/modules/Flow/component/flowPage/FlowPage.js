import React, { useState, useEffect } from 'react';

const styles = {};

const FlowPage = ({
  data
}) => {
  console.log('data' , data)

  return (
    <div style={styles.mainContainer} key="baseContainer">
      hi
    </div>
  );
};

FlowPage.propTypes = {};

FlowPage.defaultProps = {};

export default FlowPage;
