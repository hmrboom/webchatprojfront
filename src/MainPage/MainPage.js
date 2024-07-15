import React, { useEffect } from 'react'
import { Container,Flex,Box, Input,Card, CardHeader, CardBody, CardFooter,Button,Text,Image,Stack,Heading, keyframes } from '@chakra-ui/react'
import './mainpage.css'
import {ArrowForwardIcon,SpinnerIcon,CheckIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import BoxMsj from '../MessageBox/BoxMsj'
import axios from 'axios'
import { loggedUser } from '../LoginPage/LoginPage'



export default function MainPage() {
   const [conv,setConv] = useState([]);
   const [loading,setLoading] = useState(true);
   const [text,setText] = useState("");
   const [counter,setCounter] = useState(0);
   let currentDate = new Date().toJSON().slice(0, 16).replace("T"," ")
   //let counter = 0;
     function initConv(t){
         setConv([...conv,{_id:counter,text:t,user:{id:loggedUser.value._id},when:currentDate}])
         sendMsg();
         setCounter(counter+1);
    }

    async function getAllConv(){
        await axios('http://localhost:3000/api/v1/chats/6641d10c166c598c49198427')
        .then((res)=>{
           
            setConv(res.data)
            setLoading(false);
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    async function sendMsg(){
        await axios.patch('http://localhost:3000/api/v1/chats/addMsg/6641d10c166c598c49198427',
          {
            "text":text,
             "user":{
                    "userName":loggedUser.value.userName,
                    "id":loggedUser.value._id
                     }
          }
        )
        .then ((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getAllConv();
        // setConv([
        //  {id:1,text:"ceva",me:false}, {id:5,text:"ceva",me:true}, {id:2,text:"ceva",me:true}, {id:3,text:"ceva",me:false}, {id:4,text:"ceva",me:false}
        // ])
       //initConv("1",false)
      // initConv("4",false);
        
       

    },[])

  return (
<Flex className="mainContainer">
       

            {/* <Box  borderRadius='md' bg='black' color='white' px={4} h={8}>
                Button
            </Box> */}
        <Box w='50%' h='100vh'  borderRadius='md' border="2px" borderColor="teal">
            <Flex borderBottom="1px" borderColor="teal" h='10vh' align="center" color="white">
                Nume user/conv
            </Flex>

        </Box>
            
        <Box w='50%' h='100%' borderRadius='md' border="1px" borderColor="teal">

            <Flex direction='column'>
                <Box  h='94vh'   overflowY="scroll">
                
                {
                    loading ? <BoxMsj text="loading" direction="flex-end" bgColor='#D0F0C0'/>:
                    conv.map( c => (
                        //console.log(c);
                       
                            <BoxMsj key={c._id} text={c.text} direction={c.user.id === "6641ccae8bd07c4adee72b55" ? "flex-end" : "flex-start"} bgColor={c.user.id === "6641ccae8bd07c4adee72b55" ? "#D0F0C0" : "white"} time={c.when.slice(10)}/>

                    

                    ))

                }
                </Box>
                <Flex >
                    <Input  placeholder='Big Boi Text here' color='white' _placeholder={{ color: 'black.200' }} onChange={(e)=>setText(e.target.value)}/>
                    <Button onClick={()=>initConv(text)}><ArrowForwardIcon/></Button>
                </Flex>
               
            </Flex>

           


        </Box>  
</Flex>
  )
}
