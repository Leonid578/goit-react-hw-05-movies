import { useOutletContext } from 'react-router-dom';
import { Header, Description,ReviewsList } from './Reviews.styled';

const Reviews = props => {
  const [filmInfo] = useOutletContext();

  return (
    <>
      <Header>Reviews</Header>
      <ReviewsList>
        {filmInfo.reviews ? (
          filmInfo.reviews.results.map(review => {
            return (
              <Description key={review.id}>
                <h4>{review.author}</h4>
                <p> {review.content} </p>
              </Description>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </ReviewsList>
    </>
  );
};

export default Reviews;