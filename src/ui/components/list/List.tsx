import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TectServices";
import { ListStyled, 
         Info,
         Photo,
         Name, 
         Description, 
         ItemList } from "./Styled";
         
interface ListProps{pets: Pet[];
}  
    


export default function List(props: ListProps){
    const tamanhoMaximoTexto = 200;
    return(
      <ListStyled>
          {props.pets.map(pet => (
          <ItemList key={pet.id}>
              <Photo src={pet.photo} alt={pet.name}/>
              <Info>
              <Name>{pet.name}</Name>
              <Description> 
                  {TextService.limitarTexto(pet.history,tamanhoMaximoTexto)}               
               </Description>
                <Button variant={'contained'} fullWidth
                >Adotar {pet.name}</Button>
                </Info>
          </ItemList>
          ))}
      </ListStyled>
      
      
    )
}
