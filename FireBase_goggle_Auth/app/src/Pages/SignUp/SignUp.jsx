import React from "react";
import "./Rocketimg.css";
import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  Link,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { authentication } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [redirect, setRedirect] = useState(false)

  const Navigate= useNavigate()

  const SignInWithGoogle = () => {
    // console.log("shdash");
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=>{
        console.log(res);
          
           
    })
    .catch((err)=>{
        console.log(err);
    })

  };
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      className="MainFlex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "380px" }}>
          <form>
            <Stack
              borderRadius={20}
              spacing={2}
              backgroundColor="white"
              boxShadow="md"
            >
              <Box>
                <img
                  className="Rocketimg"
                  src="https://i.ibb.co/sKM9RXp/Screenshot-109.png"
                  alt=""
                />
                <Text className="welCome" fontSize={30} fontWeight={"bold"}>
                  Welcome To Bardeen
                </Text>
                <Text className="welComesmall">
                  Let's in to launch your automation
                </Text>
              </Box>

              <Stack
                borderRadius={20}
                spacing={3}
                p="1.5rem"
                backgroundColor="white"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="email" placeholder="email address" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Flex className="TextColor" justifyContent={"space-between"}>
                    <Link>Create Account</Link>
                    <Link>forgot password?</Link>
                  </Flex>
                </FormControl>
                <Button
                  borderRadius={10}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Sign In
                </Button>
                <Flex
                  borderRadius={10}
                  alignItems={"center"}
                  border={"1px"}
                  borderColor={"lightgray"}
                  width="full"
                  height={"40px"}
                  justifyContent={"space-between"}
                  pr={5}
                  pl={5}
                  cursor={"pointer"}
                  onClick={SignInWithGoogle}
                >
                  <Flex gap={4} >
                    <img
                      height={"20px"}
                      width={"20px"}
                      src="https://my.asos.com/Content/dist/images/d860112c552f4380997e32b29c5a0432.svg"
                      alt=""
                    />
                    <Text fontWeight={"bold"} color={"gray"}>
                      Sign In With Google
                    </Text>
                  </Flex>
                  <Box>
                    <BsArrowRightShort color={"gray"} size={40} />
                  </Box>
                </Flex>

                <Flex
                  borderRadius={10}
                  alignItems={"center"}
                  border={"1px"}
                  borderColor={"lightgray"}
                  width="full"
                  height={"40px"}
                  justifyContent={"space-between"}
                  pr={5}
                  pl={5}
                  cursor={"pointer"}
                >
                  <Flex gap={4}>
                    <img
                      height={"20px"}
                      width={"23px"}
                      src="https://i.ibb.co/vj4mkZg/github-mark.png"
                      alt=""
                    />
                    <Text fontWeight={"bold"} color={"gray"}>
                      Sign In With GitHub
                    </Text>
                  </Flex>
                  <Box>
                    <BsArrowRightShort color={"gray"} size={40} />
                  </Box>
                </Flex>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box></Box>
    </Flex>
  );
};

export default SignUp;
