import { Main, Wrapper, List, ListItem, Loading } from "./library";
import axios from "axios";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [catFact, setCatFact] = useState();
  const [apiResponse, setApiResponse] = useState();

  const getCatData = () => {
    const num = Math.floor(Math.random() * 34) + 1;
    axios
      .get(`https://catfact.ninja/facts?page=${num}`)
      .then((res) => {
        setCatFact(res.data.data);
      })
      .catch((res) => {
        setApiResponse(res);
        console.log(apiResponse);
      });
  };
  useEffect(() => {
    getCatData();
  }, []);

  if (catFact) {
    console.log(catFact);

    return (
      <Main>
        <Wrapper cat>
          <List>
            {catFact.map((catObj, i) => {
              return <ListItem key={i}>{catObj.fact}</ListItem>;
            })}
          </List>
        </Wrapper>
      </Main>
    );
  } else if (apiResponse) {
    return (
      <Main>
        <Wrapper>
          <h2>No cat facts could be found!（＞人＜；）</h2>
        </Wrapper>
      </Main>
    );
  } else {
    return (
      <Main>
        <Loading>Purring...</Loading>
      </Main>
    );
  }
};

export default MainContent;
