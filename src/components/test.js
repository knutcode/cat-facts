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
