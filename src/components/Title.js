import styled from 'styled-components';

const Title = styled.div`
  width: calc(100% - 256px);
  color: #000000;
  font-size: ${(props) => (props.small ? '10' : '26')}px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export default Title;
