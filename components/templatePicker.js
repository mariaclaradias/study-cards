import React from 'react';
import {
  IoTabletPortraitOutline as Portrait,
  IoTabletLandscapeOutline as Rectangular,
} from 'react-icons/io5';
import { FiHexagon as Hexagon } from 'react-icons/fi';
import cn from 'classnames';

const TemplatePicker = ({
  orientation,
  onSelectTemplate,
  selectedTemplate,
}) => {
  return (
    <div className="choose-template-container">
      Selecione seu tipo de card:
      <div
        className={cn({
          'landscape-template-container': orientation === 'landscape',
          'portrait-template-container': orientation === 'portrait',
        })}
      >
        <button
          onClick={() => onSelectTemplate(1)}
          className={cn({
            'template-button': true,
            'button-active': selectedTemplate === 1,
          })}
        >
          <div className="template-button-div">
            <Rectangular /> Retangular
          </div>
        </button>
        <button
          onClick={() => onSelectTemplate(2)}
          className={cn({
            'template-button': true,
            'button-active': selectedTemplate === 2,
          })}
        >
          <div className="template-button-div">
            <Portrait /> Retrato
          </div>
        </button>
        <button
          onClick={() => onSelectTemplate(3)}
          className={cn({
            'template-button': true,
            'button-active': selectedTemplate === 3,
          })}
        >
          <div className="template-button-div">
            <Hexagon /> Hexágono
          </div>
        </button>
      </div>
    </div>
  );
};

export default TemplatePicker;
