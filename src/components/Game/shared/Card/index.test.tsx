import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

describe('Card', () => {
  it('should render', () => {
    let counter = 0;
    const component = renderer.create(
      <Card
        onClick={() => {
          counter++;
        }}
        onClose={() => {
          counter--;
        }}
      />,
    );
    const tree = component.toTree();
    // expect(tree).toMatchSnapshot();
    tree.props.onClick();
    expect(counter).toBe(1);
    tree.props.onClose();
    expect(counter).toBe(0);
  });
});
