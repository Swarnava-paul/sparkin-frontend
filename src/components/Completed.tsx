
import { Box, Flex, Text } from "@chakra-ui/react";


const Completed = () => {
  return (
    <Flex direction="column" align="center" justify="center" height="50vh">
      <Box 
        width="80px" 
        height="80px" 
        borderRadius="50%" 
        bg="green.400" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <i className="fa-solid fa-check"></i>
      </Box>
      <Text fontSize="xl" fontWeight="bold" mt={3} color="green.600">Completed Linking</Text>
    </Flex>
  );
};

export default Completed;