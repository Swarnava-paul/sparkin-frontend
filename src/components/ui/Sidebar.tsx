import { Grid, Text, Button, Box, Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  return (
    <Grid
      bg="RGB(31, 41, 55)"
      w="250px" // Fixed sidebar width
      h="100vh" // Full height
      pos='fixed'
      p={5}
    >
      <Grid w="100%" h="62%" rowGap={8}>
        <Text color="white" fontWeight="600">
          Account Manager
        </Text>
        <Button w="100%" bg="RGB(37, 99, 235)">
          <i style={{ color: "white" }} className="fa-solid fa-plus"></i> Add
          Account
        </Button>
        <Text color="white">Privacy & Policy</Text>
      </Grid>

      <Box w='100%' h='30%' placeSelf='end' p={1.5}>
            <Flex justify='space-evenly' placeItems='center'>
            <Avatar.Root>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
               <Grid color='white'>
                 <Text>Admin User</Text>
                 <Text>admin@example.com</Text>
               </Grid>
            </Flex>
         </Box>
    </Grid>
  );
};

export default Sidebar;
