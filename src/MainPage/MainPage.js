import React, { useEffect } from 'react'
import { Container,Flex,Box, Input,Card, CardHeader, CardBody, CardFooter,Button,Text,Image,Stack,Heading, keyframes } from '@chakra-ui/react'
import './mainpage.css'
import {ArrowForwardIcon,SpinnerIcon,CheckIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import BoxMsj from '../MessageBox/BoxMsj'
import axios from 'axios'




export default function MainPage() {

    async function getAllConv(){
        await axios('http://localhost:3000/api/v1/users/getAllChats/661bf1342ff90b4ac1fafcc8')
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getAllConv();
    },[])

  return (
<Flex className="mainContainer">
       

            {/* <Box  borderRadius='md' bg='black' color='white' px={4} h={8}>
                Button
            </Box> */}
        <Box w='100vh' h='100vh' bg='red.500' borderRadius='md'>
            <Box>
                text
            </Box>

        </Box>
            
        <Box w='100vh' h='100vh' bg='#eeeaef' borderRadius='md'>

            <Flex direction='column'>
                <Box  h='95vh' bg='#FBF0CF'  overflowY="scroll">

                    <BoxMsj text="big text" direction="flex-end" bgColor='#D0F0C0'/>
                    <BoxMsj text="big text1" direction="flex-start" bgColor='white'/>
                    <BoxMsj text="big text2" direction="flex-end" bgColor='#D0F0C0'/>
                    <BoxMsj text="big text3" direction="flex-start" bgColor='white'/>    
                </Box>
                <Flex p='0.5'>
                    <Input bg='white' placeholder='Big Boi Text here' color='black' _placeholder={{ color: 'black.200' }}/>
                    <Button><ArrowForwardIcon/></Button>
                </Flex>
               
            </Flex>

           


        </Box>  
</Flex>
  )
}
