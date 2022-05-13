import React from "react";
import PropTypes, { symbol } from "prop-types";
import Container from '@mui/material/Container';

const Section = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
