import { VStack, Card, Image, FormControl, Text, Input, Button  } from "native-base";
import { Header } from "../components/";
import { useNavigation } from "@react-navigation/native";


const AddProduct = () => {
  const navigation = useNavigation();
  return (
    <>
      <Image
      source={require('../assets/bdAdd.jpg')}
      alt="Alternate Text"
      size="100%"
      resizeMode="cover"
      style={{ position: 'absolute', zIndex: -1 }}
    />

      <Header title={"Add Category"} />
      <VStack space={1} alignItems="center">
        {/* Menggunakan Card untuk membungkus gambar dan form */}
        <Card w="320" h="550" bg="white" rounded="md" marginTop={10} shadow={3} p={5}>
          <Text textAlign={"center"} fontWeight={"bold"} fontSize={20} marginTop={10}>Tambahkan Product</Text>

          <FormControl style={{ width: '70%', marginLeft: 40, marginTop: 20 }}>
            <FormControl.Label>Kategori Produk</FormControl.Label>
            <Input
              placeholder="Masukkan nama kategori" 
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingLeft: 10 }}/>
          </FormControl>

          <FormControl style={{ width: '70%', marginLeft: 40, marginTop: 10 }}>
            <FormControl.Label>Nama Produk</FormControl.Label>
            <Input
              placeholder="Masukkan nama kategori" 
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingLeft: 10 }}/>
          </FormControl>

          <FormControl style={{ width: '70%', marginLeft: 40, marginTop: 10 }}>
            <FormControl.Label>Jumlah Produk</FormControl.Label>
            <Input
              placeholder="Masukkan nama kategori" 
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingLeft: 10 }}/>
          </FormControl>

          <FormControl mt={4} style={{ width: '70%', marginLeft: 40 }}>
            <FormControl.Label>Foto Produk</FormControl.Label>
            <Input
              placeholder="Upload Foto" isReadOnly
              style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingLeft: 10 }}/>
          </FormControl>

          <Button onPress={() => {navigation.navigate("Category")}}
           mt={4} style={{ width: '70%', marginLeft: 40 }}>
            Simpan
          </Button>

          </Card>
        </VStack>
    </>
  );
};

export default AddProduct;
