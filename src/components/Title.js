import styled from 'styled-components';

const Title = styled.div`
  color: #000000;
  font-size: ${(props) => (props.small ? '16' : '26')}px;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Title;
