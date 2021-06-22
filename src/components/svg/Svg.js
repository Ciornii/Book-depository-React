import React from 'react';
import svg from '../../assets/img/sprite.svg';

const Svg = ({ name }) => {
  return (
    <svg>
      <use xlinkHref={`assets/img${svg}#${name}`} />
    </svg>
  );
};

export default Svg;
