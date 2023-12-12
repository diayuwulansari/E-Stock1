import { Heading, Center, Text } from "native-base";
import { Header } from "../components";

const DetailProduct = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"Deskripsi Produk"} withBack="true" />
      <Center flex={"1"} p={"4"}>
        <Heading>Concealer dan Eyeliner tekstur matte membantu tampil cantik.
</Heading>
        <Text textAlign={"center"}>{params.title}</Text>
      </Center>
    </>
  );
};

export default DetailProduct;
