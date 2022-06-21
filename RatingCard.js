import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RatingCard = () => {
  const [isActive, setisActive] = useState(true);
  const [isActive2, setisActive2] = useState(true);
  const [isActive3, setisActive3] = useState(true);
  const [isActive4, setisActive4] = useState(true);
  const [isActive5, setisActive5] = useState(true);
  const starRating = () => {
    setisActive((current) => !current);
  };
  const starRating2 = () => {
    setisActive2((current) => !current);
  };
  const starRating3 = () => {
    setisActive3((current) => !current);
  };
  const starRating4 = () => {
    setisActive4((current) => !current);
  };
  const starRating5 = () => {
    setisActive5((current) => !current);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="star">
            <svg
              className="starImg"
              width={17}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>
          <div className="text">
            <h2>How do we do?</h2>
            <p>
              Please let us know how we did with your support requrest.All
              feedback is appreciated to help us improving our offering!
            </p>
          </div>
          <br />
          <div className="ratingcontainer">
            <div className="rating">
              <div>
                <span
                  className="ratingbox"
                  style={{
                    backgroundColor: isActive
                      ? "hsl(216, 16%, 18%)"
                      : "hsl(25, 97%, 53%)",
                  }}
                  onClick={starRating}
                >
                  1
                </span>
              </div>
              <div>
                <span
                  className="ratingbox"
                  style={{
                    backgroundColor: isActive2
                      ? "hsl(216, 16%, 18%)"
                      : "hsl(25, 97%, 53%)",
                  }}
                  onClick={starRating2}
                >
                  2
                </span>
              </div>
              <div>
                <span
                  className="ratingbox"
                  style={{
                    backgroundColor: isActive3
                      ? "hsl(216, 16%, 18%)"
                      : "hsl(25, 97%, 53%)",
                  }}
                  onClick={starRating3}
                >
                  3
                </span>
              </div>
              <div>
                <span
                  className="ratingbox"
                  style={{
                    backgroundColor: isActive4
                      ? "hsl(216, 16%, 18%)"
                      : "hsl(25, 97%, 53%)",
                  }}
                  onClick={starRating4}
                >
                  4
                </span>
              </div>
              <div>
                <span
                  className="ratingbox"
                  style={{
                    backgroundColor: isActive5
                      ? "hsl(216, 16%, 18%)"
                      : "hsl(25, 97%, 53%)",
                  }}
                  onClick={starRating5}
                >
                  5
                </span>
              </div>
            </div>
          </div>
          <br />
          <Link to="/about">
            <div className="btn">SUBMIT</div>
          </Link>
        </div>
      </div>
    </>
  );
};
