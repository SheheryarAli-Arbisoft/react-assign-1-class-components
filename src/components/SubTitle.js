import styled from 'styled-components';

const SubTitle = styled.div`
  color: #5a5a5a;
  font-size: ${(props) => (props.small ? '14' : '18')}px;
  margin-bottom: ${(props) => (props.small ? '6' : '10')}px;
`;

export default SubTitle;
