import styled from 'styled-components';

const SubTitle = styled.div`
  color: #5a5a5a;
  font-size: ${(props) => (props.small ? '5' : '18')}px;
  margin-bottom: 10px;
`;

export default SubTitle;
