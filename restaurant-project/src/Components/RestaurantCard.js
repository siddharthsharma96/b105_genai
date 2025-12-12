const RestaurantCard = ({ res, show }) => {
  return (
    <div className="card">
      <img src={`/images/${res.info.cloudinaryImageId}.avif`}></img>
      <div className="card__details">
        <h3 className="card__name">{res?.info?.name}</h3>
        {show && (
          <>
            {" "}
            <div className="card__cuisines">
              {res?.info?.cuisines.join(", ")}
            </div>
            <div className="card__price">{res.info.costForTwo}</div>
            <div className="card__info">
              <span className="card__rating">
                {res?.info?.avgRatingString} Rating
              </span>
              <span className="card__time">3.2 mins</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
