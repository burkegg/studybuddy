import React from 'react';
import PropTypes from 'prop-types';

export default function Task(props) {
  const { task } = props;
  return (
    <div>
      <div className="Task">
        { task }
      </div>
    </div>
  );
}