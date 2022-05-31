import { useOutletContext } from 'react-router-dom'

const Reviews = props => {
  const [filmInfo] = useOutletContext()

  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {filmInfo.reviews ? filmInfo.reviews.results.map((review) => {
          return <li key={review.id}>
            <h4>{review.author}</h4>
           <p> {review.content} </p>
          </li>
        }) : <p>loading</p>}
      </ul>
</>
  )
}

export default Reviews