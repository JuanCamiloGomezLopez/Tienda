import styled from "styled-components";
import category_data from "../../data/category-data";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      {category_data.map((item, index) => (
        <Link className="link" to={"shop/" + item.title} key={index}>
          <div className="categorycontainer">
            <div
              className="image-background"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <div className="category-body-container">
              <h2>{item.title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .link {
      width: 30%;      
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      margin: 7.5px 7.5px;
      overflow: hidden;
      background-color: yellow;

    .categorycontainer {
      width: 30%;
      height: 280px;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
     

      &:hover {
        cursor: pointer;

        & .image-background {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & .category-body-container {
          opacity: 0.9;
        }
      }

      .image-background {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }

      .category-body-container {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        background-color: #ffffff;
        opacity: 0.7;
        position: absolute;

        h2 {
          font-weight: bold;
          margin: 0 6px 0;
          font-size: 22px;
          color: #4a4a4a;
        }

        p {
          font-weight: lighter;
          font-size: 16px;
        }
      }
    }
  }
`;
