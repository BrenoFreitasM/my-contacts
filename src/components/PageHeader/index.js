import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"

import arrow from "../../assets/images/icons/arrow.svg";
import { Container } from "./styles";
import { Component, useEffect } from "react";

export default function PageHeader({ title }) {
  useEffect(() => {
    console.log("Function being run after/on mount");
  }, []);

  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}
