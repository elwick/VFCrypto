import React from 'react';
import styled from 'styled-components';

export default styled.div`
  background: rgba(17, 35, 61, 1);
  background: -moz-linear-gradient(
    left,
    rgba(17, 35, 61, 1) 0%,
    rgba(28, 50, 82, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(17, 35, 61, 1)),
    color-stop(100%, rgba(28, 50, 82, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(17, 35, 61, 1) 0%,
    rgba(28, 50, 82, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(17, 35, 61, 1) 0%,
    rgba(28, 50, 82, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(17, 35, 61, 1) 0%,
    rgba(28, 50, 82, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(17, 35, 61, 1) 0%,
    rgba(28, 50, 82, 1) 100%
  );
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 7em 5em 20em;
`;
