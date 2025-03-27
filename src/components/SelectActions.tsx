
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";


const SelectActions = () => {
  return (
    <Flex direction="column" p={5}>
    {/* Navigation */}
    <HStack mb={5}>
      <Text textDecoration="underline">Select Actions</Text>
      <Text fontSize='xl' fontWeight={600}>Link AWS AZ</Text>
      <Text>Fetch</Text>
    </HStack>
    
    <Flex>
      {/* Left Section - Cost Saving Actions */}
      <Box flex="2" p={5} borderWidth="1px" borderRadius="md">
        <Text fontSize="lg" fontWeight="bold">Cost Saving Actions</Text>
        <VStack align="start" mt={3}>
          <label><input type="checkbox" /> Start-Stop Resources</label>
          <label><input type="checkbox" /> Pause-Resume Resources</label>
          <label><input type="checkbox" /> Resource Cleanup</label>
        </VStack>
        
        <Text fontSize="md" fontWeight="bold" mt={5}>Resource Types</Text>
        <VStack align="start">
          <label><input type="checkbox" /> EC2</label>
          <label><input type="checkbox" /> RDS</label>
          <label><input type="checkbox" /> Light Sail</label>
          <label><input type="checkbox" /> Amazon Neptune</label>
          <label><input type="checkbox" /> Redshift Clusters</label>
          <label><input type="checkbox" /> Aurora Serverless V2</label>
        </VStack>
        
        <Text fontSize="md" fontWeight="bold" mt={5}>Deletion Options</Text>
        <VStack align="start">
          <label><input type="checkbox" /> Terminate EC2</label>
          <label><input type="checkbox" /> Delete EBS Volumes</label>
          <label><input type="checkbox" /> Delete EBS Snapshots</label>
          <label><input type="checkbox" /> Delete RDS</label>
        </VStack>
      </Box>
      
      {/* Right Section - JAM Policy */}
      <Box flex="1" ml={5} p={5} borderWidth="1px" borderRadius="md" position="relative" overflowY="auto" maxH="250px">
        <Text fontSize="lg" fontWeight="bold">JAM Policy</Text>
        <Text mt={3}>Scrollable content here...</Text>
      </Box>
    </Flex>
  
  </Flex>
  )
}

export default SelectActions
