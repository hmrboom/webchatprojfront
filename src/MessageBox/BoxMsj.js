import React from 'react'
import {ArrowForwardIcon,SpinnerIcon,CheckIcon} from '@chakra-ui/icons'
import { Container,Flex,Box, Input,Card, CardHeader, CardBody, CardFooter,Button,Text,Image,Stack,Heading, keyframes } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;


export default function BoxMsj({text,direction,bgColor}) {
  const spinAnimation = `${spin} infinite 2s linear`;   
  const [sending,setSending] = useState(true);

  useEffect( () =>{
      setTimeout(()=>{
          setSending(false)
      },5000)
  },[])

  return (
  <Stack display='flex'  alignItems={direction}>
    <Box h='auto' bg={bgColor} p='2' m='2' maxW="40vh" borderRadius='md'  > 
    
    {text}
    <Stack display='flex' alignItems='flex-end' >
        <Box as='span' fontSize='sm' color='gray.600'>
            22:00 
            {
                sending ? 
                    <SpinnerIcon marginBottom='1' marginLeft='1' animation={spinAnimation} />
                :
                    <CheckIcon marginBottom='1' marginLeft='1' />
            }
            
           
        </Box>
    </Stack>

    </Box>
</Stack>
  )
}
