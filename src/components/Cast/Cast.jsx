import { useOutletContext } from 'react-router-dom';

const Cast = () => {
  const [filmInfo] = useOutletContext();
  return (
    <>
      <h3>cast</h3>
      <ul>
        {filmInfo.credits ? (
          filmInfo.credits.cast.map(actor => (
            <li key={actor.id}>{actor.name}</li>
          ))
        ) : (
          <p>loading</p>
        )}
      </ul>
    </>
  );
};

export default Cast;
