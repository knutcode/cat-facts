import styled from "styled-components";

/* ${(props) => (props. ? "" : "")} */

// export const Button = styled.button`
//   background-color: ${(props) => (props.skyblue ? "skyblue" : "salmon")};
//   padding: 0.65em 2em;
//   font-size: ${(props) => (props.big ? "25px" : "")};
//   border-radius: ${(props) => (props.rounded ? "10px" : "")};
// `;

export const Headline = styled.h1`
  font-size: 40px;
`;

export const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  box-shadow: 0 0 10px gray;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 750px;
  padding: 1rem 3rem 1.5rem;
  background-color: #e5e5e5;
  box-shadow: 2px 2px 6px gray;
  margin: 3rem 4rem;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 0 10px 0;
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 18px;
  padding: 15px 0;
  border-bottom: 1px solid #c8c8c8;
  letter-spacing: 0.08em;
  line-height: 22px;
`;

export const Loading = styled.p`
  font-size: 30px;
  align-self: center;
  margin-top: 15rem;
`;
