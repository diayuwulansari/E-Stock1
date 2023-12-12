import { Heading, Center } from "native-base";
import { Header } from "../components";

const Bestseller = () => {
  return (
    <>
      <Header title={"Bestseller"} />
      <Center flex={1}>
        <Heading>Ini Bagian Bestseller</Heading>
      </Center>
    </>
  );
};

export default Bestseller;