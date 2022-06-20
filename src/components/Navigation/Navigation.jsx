import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Link,
  Header,
  Conteiner,
  Content,
  Pages,
  Footer,
  DateWork,
} from './Navigation.style';


export const Navigation = () => {
  return (
    <Pages>
      <Header>
        <Conteiner>
          <Link className="linkBar"  to="/">
            Houme
          </Link>
          <Link to="/movies">
            Movies
          </Link>
        </Conteiner>
      </Header>
      
      <Content>
        <Conteiner>   
          <Suspense>
            <Outlet />
          </Suspense>
        </Conteiner>
      </Content>

      <Footer>
        <Conteiner>
          <DateWork>goit-react-hw-05-movies</DateWork>
        </Conteiner>
      </Footer>
    </Pages>
  );
};
