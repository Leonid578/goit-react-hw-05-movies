import { AiOutlineSearch } from 'react-icons/ai';
import { SerchForm, SerchButton, InputWord, BoxFilms } from './MoviesPage.style';
import { findFilmsTitle } from '../views/fetchAPI';
import { useState, useEffect } from "react";
import { Link, useSearchParams,  useLocation } from 'react-router-dom'
import FilmCard from 'components/FilmCard/FilmCard';


const MoviesPage = () => {
    const [arreyFilms, SetArreyFilms] = useState([])
    let [searchParams, setSearchParams] = useSearchParams(); // СОЗДАЕМ ОБЪЕКТ ПРИ ВВОДЕ ПОИКОВОГО СЛОВА
    const location = useLocation();
  
    // Тут следим за вводом поискового слова в инпут сохраняем тут же в параметры для запроса
    const onInpurWord = e => {
      if (e.target.value === '') {
        setSearchParams({}); // если поисковое слово пусто то и параметры поиска пустые
        return;
      }
      setSearchParams({ query: e.target.value.toLowerCase().trim() }); // QUERY в поисковом параметре мы СОЗДАЕМ тут и там просто лежит слово
    };
  
    //вынесли запрос для переиспользования в сабмите и юзэффекте
    const eventNo = () => {
       const search = location.search;
      const searchQuery = searchParams.get('query');
      findFilmsTitle(searchQuery, search).then((r)=>{
        SetArreyFilms(r.results);
      })
    }
  
    // обрабатываем данные формы и получаем массив фильмов
    const formSubmit = event => {
      event.preventDefault();
      eventNo()
    };
  
      // отправляем данные запроса если нас вернуло и в памяти есть поисковое слово
    useEffect(() => {
      eventNo()
   
    }, [eventNo])
  
    return (
      <>
        <SerchForm onSubmit={formSubmit}>
          <SerchButton type="submit">
            <AiOutlineSearch style={{color: "rgb(250, 250, 250)", width: "100%", height: "100%"}} />
          </SerchButton>
          <InputWord
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={onInpurWord}
            value={searchParams.get('query') === null ? '' : searchParams.get('query')}
          />
        </SerchForm>
  
        {arreyFilms.length > 0 && <BoxFilms>
          {arreyFilms.map(film => {
          return (
            <Link key={film.id} to={''+film.id} 
                    state={{ from: location }}>
                <FilmCard poster_path={film.poster_path} title={film.title} />
              </Link>
            );
          })}
        </BoxFilms>}
      </>
    )
  }
  
  export default MoviesPage