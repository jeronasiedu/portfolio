import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
outline: none;
border: none;
list-style: none;
}
html{
    scroll-behavior: smooth;
}
body{
    font-family:poppins;
    background-color: ${({ theme }) => theme.background.body};
}
h3+span,h2+span,h4+span,h1+span{
    color:${({ theme }) => theme.colors.text_s};
    display: block;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #555;
}
h1{
    font-size: 1.8rem;
    color:${({ theme }) => theme.colors.text_p};
}
p{
    color:${({ theme }) => theme.colors.text_s};
}
html::-webkit-scrollbar-track
{
    width: 12px;
	background-color: #f5F6F5;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}

html::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;

}

html::-webkit-scrollbar-thumb
{
    border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}


`
export default GlobalStyle
