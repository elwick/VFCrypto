import styled from 'styled-components';
import TableRowWithData from 'containers/TableRowWithData';

export default styled(TableRowWithData)`
  border-bottom: 1px solid #eef0f5;
  padding: 1.5% 5% 1.5% 15%;
  transition: 0.7s;

  :hover {
    background: rgb(235, 240, 234);
  }
`;
