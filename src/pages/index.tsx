import type { NextPage } from "next";
import List from "../ui/components/list/List";
import Title from "../ui/components/title/Title";


const Home: NextPage = () => {
  return (
    <div>
      <Title title=""
       subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />
        <List
          pets={[
            {
              id: 1,
              name:'bidu',
              history:'ashaushausausahusa',
              photo:'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453'
            },
            {
              id: 2,
              name:'ashan',
              history:'ashaushausausahusa',
              photo:'https://s1.static.brasilescola.uol.com.br/be/e/Ra%C3%A7as-de-cachorros.jpg'
            }           
            
          ]}        
        />
    </div>
  );
};

export default Home;
