import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import StudentListElement from "../../src/components/common/StudentListElement";

// unit tests for the StudentListElement component
describe('StudentListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        student: {},
        showDelete: () => {}
      };
      const wrapper = shallow(<StudentListElement {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
