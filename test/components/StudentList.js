import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import {StudentList} from "../../src/components/common/StudentList";

// unit tests for the StudentList component
describe('StudentList component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {
        students: []
      };
      const wrapper = shallow(<StudentList {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
