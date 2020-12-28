import { Container, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const Index = () => (
  <Container>
    <Link href="/2019/en">
      <ChakraLink>2019/en</ChakraLink>
    </Link>
  </Container>
);

export default Index;
