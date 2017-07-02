import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import StudentDeletePrompt from "../../src/components/common/StudentDeletePrompt";

// unit tests for the StudentDeletePrompt component
describe('StudentDeletePrompt component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        show: true,
        student: {},
        hideDelete: () => {},
        studentDelete: () => {}
      };
      const wrapper = shallow(<StudentDeletePrompt {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
