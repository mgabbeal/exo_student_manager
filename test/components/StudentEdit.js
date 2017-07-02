import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import {StudentEdit} from "../../src/components/StudentEdit";

// unit tests for the StudentEdit component
describe('StudentEdit component', () => {
  describe('render()', () => {
    it('should render the add student form', () => {
      const props = {
        student: {},
        handleSubmit: () => {}
      };
      const wrapper = shallow(<StudentEdit {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
