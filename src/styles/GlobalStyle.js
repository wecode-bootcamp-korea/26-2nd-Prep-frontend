import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	*{
    box-sizing : border-box;
    cursor: default;
    font-family: "'Noto Sans KR', sans-serif";
  }
`;

export default GlobalStyle;
