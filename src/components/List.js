import styled from 'styled-components';

export const List = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  margin-top: 40px;
  padding: 0 20px;
  padding-top: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #c9c9c9;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #c9c9c9;
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 20px;
  margin-bottom: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #c9c9c9;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #c9c9c9;
`;

export const ListItemContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 100%;

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(2) > div {
    margin-right: ${(props) => (props.small ? '5px' : '2rem')};
  }
`;
