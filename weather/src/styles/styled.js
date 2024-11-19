import styled from 'styled-components'

export const Wrap = styled.div`
  overflow: hidden;
  min-width: ${(props) => props.minWidth || '1200px'};
  padding-top: 60px; /* 메뉴바 높이 */
`;

export const Main = styled.main`
  width: ${(props) => props.$width || '1200px'};
  margin: 0 auto;
  min-height: calc(100vh - 60px); /* 메뉴바 높이를 뺀 전체 높이 */
  overflow: visible; /* 숨기지 않음 */
`;



