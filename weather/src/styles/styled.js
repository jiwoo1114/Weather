import styled from 'styled-components'

export const Wrap = styled.div`
overflow: hidden;
min-width:${(props) => props.minWidth || '1200px'};
`

export const Main2 = styled.main`
width:${(props) => props.$width || '1200px'};
margin:0 auto;
overflow:hidden;
padding: ${(props) => props.$padding || 0};
`



export const Sidebar = styled.div`
  width: 150px;
  height: calc(100vh - 60px); /* 메뉴바 높이를 뺀 사이드바 높이 */
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 60px; /* 메뉴바 높이만큼 내려서 배치 */
  left: 0;
`;


