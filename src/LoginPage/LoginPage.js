import React, { useState } from 'react'
import './loginpage.css'
import { signal, computed } from "@preact/signals-react";
import { useNavigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Center,
    Flex
  } from '@chakra-ui/react'
import axios from 'axios';
import { useHref } from 'react-router-dom';


export const loggedUser = signal({});


export function LoginPage() {
    const userTypeing = signal("");
    const [error,setError] = useState(false)
    const navigate = useNavigate();
   async function verifyUser(){
        await axios.get('http://localhost:3000/api/v1/users/getUser/'+userTypeing)
        .then(res=>{
            console.log(res.data)
            loggedUser.value = res.data;
            navigate('/main') 
        })
        .catch(err=>{
            console.log(err)
            if(err.request.status == 404)
                setError(true);
        })
        
        //console.log(userTypeing.value);
    }
  return (
<Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"} >
    <Center w="25%">
        
        <FormControl isRequired >
            <FormLabel color="white">Login with your userName</FormLabel>
            <Input  placeholder='UserName' type='text' color="white" onChange={(e) =>{ userTypeing.value = e.target.value }} />
            {
                error ?
                (
                    <FormHelperText>This user does not exist</FormHelperText>
                )
                :
                (
                    <FormHelperText></FormHelperText>
                )
            }
            <Button
            mt={5}  
            w="100%"
            colorScheme='teal'
            type='submit'
            onClick={()=>verifyUser()}>
                Enter
            </Button>
        </FormControl>
    </Center>
</Flex>    

  )
}
