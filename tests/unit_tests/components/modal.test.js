import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Modal from '../../../components/modal';

test('should render', () => {
  const component = renderer.create(
    <Modal handleClose={() => {}} show={true} />
  );
});

test('should call on click function', () => {
  const mockFunction = jest.fn();
  const component = shallow(<Modal handleClose={mockFunction} show={true} />);

  component.find('.button-modal-close').simulate('click');

  expect(mockFunction).toHaveBeenCalledTimes(1);
});
