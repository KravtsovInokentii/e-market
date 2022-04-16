import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  dogId,
  title,
  imageUrl,
  price,
  onHeart,
  onPlus,
  isFavorites = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded, heart } = React.useContext(AppContext);
  console.log(heart);
  const isHeart = heart.some((item) => item.dogId === dogId);

  const onClickPlus = () => {
    onPlus({ dogId, title, imageUrl, price });
  };

  const onClickHeart = () => {
    onHeart({ dogId, title, imageUrl, price });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={0}
          width={250}
          height={240}
          viewBox="0 0 250 240"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="93" y="142" rx="0" ry="0" width="1" height="0" />
          <rect x="0" y="0" rx="10" ry="10" width="206" height="150" />
          <rect x="0" y="160" rx="5" ry="5" width="206" height="15" />
          <rect x="0" y="180" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="212" rx="5" ry="5" width="80" height="340" />
          <rect x="172" y="206" rx="9" ry="9" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.heart} onClick={onClickHeart}>
            <img
              src={
                isHeart || isFavorites ? "/img/heart 2.png" : "/img/heart 1.png"
              }
              alt="Heart"
            />
          </div>
          <img width={210} height={150} src={imageUrl} alt="Dog" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} $</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              width={30}
              height={30}
              src={
                isItemAdded(dogId)
                  ? "/img/btn-checked.png"
                  : "/img/btn-plus.png"
              }
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
