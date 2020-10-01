import styled from 'styled-components';

const Description = styled.div`
  font-size: ${(props) => (props.small ? '14' : '18')}px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Description;
