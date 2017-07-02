import React from "react";
import {Nav, NavItem, Glyphicon} from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>
            Students List
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/student-edit">
          <NavItem>
            Add Student <span></span>
            <Glyphicon glyph="plus-sign"/>
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
