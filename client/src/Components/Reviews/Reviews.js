import axios from 'axios';
import { useState, useEffect} from 'react';

import './Reviews.css';
import Review from '../Review/Review.js';

function Reviews({ product })  {

  let [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
        axios.get(`http://localhost:8080/reviews?product_id=${product.id}`)
        .then(res => {

          let temp = res.data.results.map((element, index) => {
            return <Review review={element} key={index} />
          })
          setReviewsArr(<div>{temp}</div>);

        })
        .catch(err => console.log(err));
  }, [product])

  return (
    <div className="reviews">
      <div className="reviewsInteractions">
        <span className="reviewSorter primaryText">
          248 reviews, sorted by
          <select name="sort-options" className="sortOptions accentColor primaryText">
            <option value="relevance">relevance</option>
            <option value="coolness">coolness</option>
            <option value="dopeness">dopeness</option>
            <option value="sickness">sickness</option>
          </select>
        </span>
        <button className="reviewAdder borderColor">Write a Review!</button>
      </div>
      <div className="reviewArray">
        {reviewsArr.length !== 0 && reviewsArr}
      </div>
    </div>
  );
}

export default Reviews;