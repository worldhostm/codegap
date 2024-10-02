import React from 'react';
import styles from './starRating.module.css';
import 'font-awesome/css/font-awesome.min.css';

interface Props {
  stars: number;
}

const StarRating = ({ stars }: Props) => {
  // 소수점 첫째 자리까지 반올림
  const roundedStars = Math.round(stars * 2) / 2;

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`fa ${
            roundedStars >= index
              ? 'fa-star ' + styles.checked
              : roundedStars + 0.5 === index
              ? 'fa-star-half-o ' + styles.checked
              : 'fa-star'
          }`}
        ></span>
      ))}
    </div>
  );
};

export default StarRating;