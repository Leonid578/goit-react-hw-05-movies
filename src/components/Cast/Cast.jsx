import { useOutletContext } from 'react-router-dom';
import {
  ActorCard,
  ActorFotoFrame,
  NoFoto,
  CastList,
  Header,
} from './Cast.style';

const Cast = () => {
  const [filmInfo] = useOutletContext();
  const baseUrl = 'https://image.tmdb.org/t/p/w200/';
  return (
    <>
      <Header>cast</Header>
      <CastList>
        {filmInfo.credits ? (
          filmInfo.credits.cast.map(actor => (
            <ActorCard key={actor.id}>
              <ActorFotoFrame>
                {actor.profile_path ? (
                  <img
                    src={`${baseUrl}${actor.profile_path}`}
                    loading="lazy"
                    alt={actor.name}
                  />
                ) : (
                  <NoFoto>no image</NoFoto>
                )}
              </ActorFotoFrame>
              {actor.name}
            </ActorCard>
          ))
        ) : (
          <p>loading</p>
        )}
      </CastList>
    </>
  );
};

export default Cast;
