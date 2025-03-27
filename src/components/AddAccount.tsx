import { Box} from "@chakra-ui/react";
import { Text ,Grid,Flex} from "@chakra-ui/react";
import aws from '../assets/aws.png';
import utho from '../assets/utho.png'
import gcp from '../assets/gcp.png'
import azure from '../assets/azure.png'
import digitalocean from '../assets/digitalocean.png'
import { useState } from "react";


const AddAccount: React.FC = () => {

  const images = [utho,aws,gcp,azure,digitalocean];
  const [selectProvider,setSelectProvider] = useState<string>('')

  return (
    <Box w='100%' p={5}>
        <Grid  placeItems='start'>
           <Text fontSize='2xl' fontWeight={600}>Choose Account</Text>
           <Text color='grey'>Fill in the details to create a new account connection</Text>
           <br />
           <br />
           <Text color='grey'>Account Type</Text>
           <Flex justify='space-evenly' mt={7}>
               {
                images.map((image,index)=>(
                    <Box key={index} p={5} onClick={()=>setSelectProvider(image)} 
                    border={selectProvider == image ? '2px dashed rgb(80, 129, 255)':''} 
                    ml={9} boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                    borderRadius='10px' cursor='pointer' display='flex' alignItems='center' justifyContent='center'>
                        <img src={image} 
                        style={{width:'100px',mixBlendMode:'multiply',
                        }} 
                        alt={`${image} logo`} />
                    </Box>
                ))
               }
           </Flex>
        </Grid>
    </Box>
  );
};

export default AddAccount;

