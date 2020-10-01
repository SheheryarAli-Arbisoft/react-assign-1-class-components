import styled from 'styled-components';

export const VideoPlayerSection = styled.div`
  display: flex;
`;

export const VideoSection = styled.div`
  box-sizing: border-box;
  padding: 20px 15px;
  width: 65%;
  min-height: 100px;
  height: fit-content;
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #c9c9c9;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #c9c9c9;

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  & > div:nth-child(3) > div {
    margin-right: 30px;
  }
`;

export const RelatedVideosSection = styled.div`
  width: 35%;
  margin-left: 12px;
`;
