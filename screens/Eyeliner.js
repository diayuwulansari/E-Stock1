import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datass from "../datass";
import { Button } from 'react-native';



const Eyeliner = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Detail Product", { item: item })}
      >
        <Box
          p={"2"}
          borderBottomColor={"dark.500"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"4"}>
            <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              alt="Image Data"
            />
          </Box>
          <Box flex={1.8}>
            <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  const navigateToAddProduct = () => {
    navigation.navigate("Tambah Produk"); 
  };

  return (
    <>
      <Header title={"Daftar Produk"} />
      <Box py={""} bg="red.300">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* ... your existing code ... */}
        </ScrollView>
      </Box>
      
      <FlatList
        data={datass}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Button
  onPress={navigateToAddProduct}
  title="Tambah Produk"
  color="brown"
  style={{ position: "absolute", bottom: 4, right: 4 }}
/> 
    </>
  );
};


export default Eyeliner;