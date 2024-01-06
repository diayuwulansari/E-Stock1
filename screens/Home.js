import React, { useState, useEffect } from "react";
import { Heading, Image, Text, Box, ScrollView, Button, HStack, Center } from "native-base";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import FIREBASE from "../src/utils/firebase";

const HomeScreen = () => {

  const navigation = useNavigation();
  const [highlight, setHighlight] = useState([])
  useEffect(() => {
    const db = getFirestore(FIREBASE)
    const categoriesCol = collection(db, "categories")
    const productsCol = collection(db, "products")
    const highlightFunc = async () => {
      const categories = await getDocs(categoriesCol)
      const products = await getDocs(productsCol)
      setHighlight([
        {
          "name": "Category",
          "description": "Total Jumlah Seluruh",
          "icon": require('../assets/Category.png'),
          "count": categories.size,
          "color": "#F1AA7B"
        },
        {
          "name": "Product",
          "description": "Total Jumlah Seluruh",
          "icon": require('../assets/Product.png'),
          "count": products.size,
          "color": "#FCE1E4"
        }
      ])
    }
    highlightFunc()
  },[])

  const menu = [
    {
      "to": "AboutUs",
      "color": "#FFC09F",
      "name": "About Us"
    },
    {
      "to": "AddCategory",
      "color": "#FFEE93",
      "name": "Tambah Category"
    },
    {
      "to": "AddProduct",
      "color": "#FCF5C7",
      "name": "Tambah Produk"
    },
  ]
  
  return (
  //fragmen untuk mengelompokkan jsx
  <> 
    <Image
      source={require('../assets/bgScreen.jpg')}
      alt="Alternate Text"
      size="100%"
      resizeMode="cover"
      style={{ position: 'absolute', zIndex: -1 }}
    />

    <Header title="E-Stock"/>
      <Text fontSize={"25"} margin={6} fontWeight={"bold"} color="#000000" >
        Welcome!
      </Text>
      <Box py={"2"} w="100%" h="100%" backgroundColor={"white"} borderRadius={30} borderBottomRadius={0} paddingBottom={100}>
        <Heading
          fontSize={"22"}
          fontWeight={"bold"}
          margin={6}
          lineHeight={"xs"}
          ellipsizeMode="tail"
          numberOfLines={2}
          color="#000000"
        >
          Highlight
        </Heading>
          
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} marginLeft={5}>
          { highlight.length > 0 ? 
            highlight.map((e, index) => (
              <Box w={"257"}  mr={"4"} bg={e.color} borderRadius={8} key={index}>
                <HStack>
                  <Image w="6" h="6" p="2" alt={e.name} mb={"2"} margin={2} source={e.icon} />
                  <Box>
                    <Heading
                      fontSize={"17"}
                      margin={2}
                      lineHeight={"xs"}
                      ellipsizeMode="tail"
                      numberOfLines={2}
                      color="#000000"
                    >
                      {e.description}
                    </Heading>
                    <Text fontSize={"17"} marginLeft={2} color="#000000"  fontWeight={"bold"}>
                      {e.name}
                    </Text>
                    <Text fontSize={"25"} color="#000000" marginTop={8} fontWeight={"bold"}>
                      {e.count}
                    </Text>
                    <Text fontSize={"15"} color="#000000" >
                      {e.name}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            ))
            :
            <Box style={{width: 257, flex: 1, justifyContent: "center"}}>
              <ActivityIndicator size="large" color="#F1AA7B" />
            </Box>
          }
        </ScrollView>

        {/* Bagian Button */}
        <ScrollView marginBottom="20">
          <Heading
            fontSize={"22"}
            fontWeight={"bold"}
            margin={3}
            marginLeft={6}
            lineHeight={"xs"}
            ellipsizeMode="tail"
            numberOfLines={2}
            color="#000000"
          >
            Menu
          </Heading>
          <Box
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {menu.map((e, index) => (
              <Button
                w={"80%"}
                margin={3}
                bg={e.color}
                _text={{ color: "#000000" }}
                onPress={() => {
                  navigation.navigate(e.to);
                }}
                key={"menu"+index}
              >
                {e.name}
              </Button>
            ))}
          </Box>
        </ScrollView>
      </Box>
    </>  
  );
};


export default HomeScreen;