/**
 *
 * Table
 *
 */

import React from 'react';
import TableRowWithData2 from './TableRowWithData';
import Wrapper from './Wrapper';
import TableHead from './TableHead';
import TableHeadWrapper from './TableHeadWrapper';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Table() {
  return (
    <Wrapper>
      <TableHeadWrapper>
        <TableHead>Cryptocurrency</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Market Cap</TableHead>
        <TableHead>24H Change</TableHead>
      </TableHeadWrapper>
      <Wrapper>
        <TableRowWithData2 />
      </Wrapper>
    </Wrapper>
  );
}

Table.propTypes = {};

export default Table;
