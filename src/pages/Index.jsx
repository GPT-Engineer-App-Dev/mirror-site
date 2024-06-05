import { Box, Button, Container, Flex, Heading, IconButton, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="lg">Project Dashboard</Heading>
        <Flex>
          <Input placeholder="Search projects..." mr={2} />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Project 1</Heading>
          <Text mt={4}>Description of project 1.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Project 2</Heading>
          <Text mt={4}>Description of project 2.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Project 3</Heading>
          <Text mt={4}>Description of project 3.</Text>
        </Box>
      </SimpleGrid>

      <Flex justifyContent="flex-end" mt={8}>
        <Button leftIcon={<FaPlus />} colorScheme="teal">Create</Button>
      </Flex>
    </Container>
  );
};

export default Index;