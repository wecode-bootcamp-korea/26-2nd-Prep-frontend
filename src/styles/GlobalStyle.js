import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	*{
    box-sizing : border-box;
    cursor: default;
  }
	
  html,body,#root{
    height: 100%;
  }

`;

export default GlobalStyle;
