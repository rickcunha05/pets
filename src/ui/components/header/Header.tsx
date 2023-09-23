import { 
    HeaderContainer,
    Logo
 } from './Styled';

 export default function Cabecalho(){
     return(
         <HeaderContainer>
             <Logo src="/image/logo.svg" alt="Adote um Pet" />
         </HeaderContainer>
     )
 }