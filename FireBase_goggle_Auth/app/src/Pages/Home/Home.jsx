import { Box, Flex, Heading, Stack, Text ,Center} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);

  const DataFeatch = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-11-06&sortBy=publishedAt&apiKey=53acbf57721147659eaec630d1ea0284"
      )
      .then((data) =>setData(data.data.articles))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    DataFeatch();
  }, []);
  console.log(data);
  return (
    <Stack>
      <Box>
        <Navbar />
      </Box>
      <Stack>
        {data.map((ele,i) => {
          return (
            <Stack key={i} >
                <Center>
              <Box  className="HomePagemainStack" >
              <img width={"500px"} src={ele.urlToImage} alt="" />
              <Text>{ele.publishedAt}</Text>
              <Text fontSize={22} fontWeight={"bold"} w>{ele.title}</Text>

              <Text w={"400px"}>{ele.description}</Text>
              
              </Box>
              </Center>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Home;
