import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ title, image }) => {
  return (
    <button
      type="button"
      className="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--variant-elevated button-style"
      style={{ height: '300px', width: '300px' }}
    >
      <span className="v-btn__overlay"></span>
      <span className="v-btn__underlay"></span>
      <span className="v-btn__content" data-no-activator>
        <i
          className={`${image} mdi v-icon notranslate v-theme--light`}
          aria-hidden="true"
          style={{ fontSize: '200px', height: '200px', width: '200px' }}
        ></i>
        <h3 className="text-position">{title}</h3>
      </span>
    </button>
  );
};

export default ButtonComponent;
