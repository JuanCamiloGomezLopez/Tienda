import styled from "styled-components";
import category_data from "../../data/category-data"


export function Directory({ Category_item }) {

  return (
    <Container>
      {category_data.map((item, index) => (
        <Category_item  key={item.id} category={item} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;
