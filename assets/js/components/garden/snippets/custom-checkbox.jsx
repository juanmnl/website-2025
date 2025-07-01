import React, { useState } from 'react';

const CustomCheckboxLive = () => {
  const [checked, setChecked] = useState(false);
  return (
    <label
      className='custom-checkbox'
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '0.9em',
        color: '#24292F',
        gap: '10px',
      }}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        style={{ display: 'none' }}
      />
      <span
        className='checkmark'
        style={{
          width: '20px',
          height: '20px',
          border: '2px solid #353a3f',
          borderRadius: '3px',
          position: 'relative',
          transition: 'all 0.3s ease',
          backgroundColor: checked ? '#ffe8a8' : 'transparent',
          borderColor: checked ? '#1b1e21' : '#353a3f',
        }}
      >
        {checked && (
          <span
            style={{
              position: 'absolute',
              left: '6px',
              top: '2px',
              width: '5px',
              height: '10px',
              border: 'solid #1b1e21',
              borderWidth: '0 2px 2px 0',
              transform: 'rotate(45deg)',
            }}
          />
        )}
      </span>
      Remember me
    </label>
  );
};

export default {
  id: 5,
  title: 'Custom Checkbox',
  description: 'Styled checkbox with smooth transitions',
  type: 'component',
  thumbnail: '/assets/images/th3.png',
  html: `<label class="custom-checkbox">
  <input type="checkbox" />
  <span class="checkmark"></span>
  Remember me
</label>`,
  css: `.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9em;
  color: var(--text-color);
  gap: 10px;
}

.custom-checkbox input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid var(--secondary-color);
  border-radius: 3px;
  position: relative;
  transition: all 0.3s ease;
}

.custom-checkbox input:checked + .checkmark {
  background-color: var(--butter);
  border-color: var(--dark-gray);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid var(--dark-gray);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox input:checked + .checkmark:after {
  display: block;
}`,
  js: `document.querySelectorAll('.custom-checkbox input').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    console.log('Checkbox:', this.checked ? 'checked' : 'unchecked');
  });
});`,
  liveComponent: CustomCheckboxLive,
};
