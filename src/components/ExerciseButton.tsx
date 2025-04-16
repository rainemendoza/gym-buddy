'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function ExerciseButton({ label }) {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Button
      variant="outline-primary"
      onClick={toggleCheck}
      style={{ display: 'flex', alignItems: 'center' }}
      type="button"
    >
      {/* Round checkbox indicator */}
      <span
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '2px solid #0d6efd',
          display: 'inline-block',
          marginRight: '8px',
          backgroundColor: checked ? '#0d6efd' : 'transparent',
          transition: 'background-color 0.2s ease'
        }}
      />
      {label}
    </Button>
  );
}

ExerciseButton.propTypes = {
  label: PropTypes.string,
};

ExerciseButton.defaultProps = {
  label: 'Exercise',
};

export default ExerciseButton;
