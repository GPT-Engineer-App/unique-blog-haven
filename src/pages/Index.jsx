import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} borderRadius="md" mb={6}>
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">
            MyBlog
          </Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaInfoCircle /> About</Link>
            <Link href="#"><FaEnvelope /> Contact</Link>
          </HStack>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Login</Link>
          <Link href="#">Sign Up</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        {/* Blog Posts */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Blog Post Title 3</Heading>
              <Text mt={4}>This is a summary of the blog post content. It gives a brief overview of what the post is about...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="lg">About Me</Heading>
              <Text mt={2}>This is a brief description about the blog author. It gives readers some background information...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="lg">Categories</Heading>
              <VStack align="start" mt={2}>
                <Link href="#">Category 1</Link>
                <Link href="#">Category 2</Link>
                <Link href="#">Category 3</Link>
              </VStack>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="lg">Follow Me</Heading>
              <VStack align="start" mt={2}>
                <Link href="#">Twitter</Link>
                <Link href="#">LinkedIn</Link>
                <Link href="#">GitHub</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;