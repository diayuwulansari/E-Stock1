import React, { useState, useEffect } from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider,  Divider, Pressable,  ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { ImageBackground } from 'react-native';
import app from "../src/utils/firebase";
import { getFirestore, collection, getDocs } from "@firebase/firestore";


const Categories = () => {
const navigation = useNavigation();
const [categories, setCategories] = useState([])
useEffect(() => {
  const db = getFirestore(app)
  const categoriesCol = collection(db, "categories")
  getDocs(categoriesCol)
    .then(snapshot => setCategories(snapshot.docs.map(doc => doc.data())))
},[])
return (
<NativeBaseProvider>
  <ImageBackground source={require('../assets/bg.jpg')} style={{flex: 1}} >
    <Center flex={1}>
      <Box >
        <ScrollView>
          <Box alignItems="center">
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Box marginTop={100} marginLeft={5}>
                    <Heading color="white" bold size="xl">Kategori</Heading>
                    <Text color='white' fontSize="lg">Berikut adalah kategori produk yang ada</Text>
                </Box>
              </AspectRatio>  
            </Box>
          </Box>

          <Box rounded="3xl"   
  _light={{
   backgroundColor: "white"
 }}>
    
      <Stack p="4" space={30}>
        <Stack space={2}>
         <Center>
         <Text fontSize="xl" marginBottom={4} color="#43270f" bold>
           category
         </Text>
         <Divider />
         </Center>
        
         <Box alignItems="center">
   

   
 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     
      <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/lip.jpg')} alt="Alternate Text"/>
 </Pressable>
 
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/Eyeshadow.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("Cushion")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/cushion.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("BlushOn")}>
     <Image size={120} borderRadius={100} 
     source={require('../assets/BlushOn.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Sunscreen.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/eyebroo.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Foundation.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Mascara.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/nail.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Consealer.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>

 <Stack space="2" alignItems="center" marginTop={7}>
   <HStack space="9" alignItems="center">
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Eyeliner.jpeg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
     
     <Center>
     <Pressable onPress={() => navigation.navigate("")}>
     <Image size={120} borderRadius={100} source={require('../assets/Bedak.jpg')} alt="Alternate Text"/>
 </Pressable>
     </Center>
   </HStack>
 </Stack>
 
 
 

 </Box>
         </Stack>
     </Stack>
     
     </Box>
     </ScrollView>
     </Box>
     
);
 
};

 export default () => {
     return (
       <NativeBaseProvider>
         <ImageBackground source={require('../assets/bg.jpg')} style={{flex: 1}} >
         <Center flex={1}>
             <Home />
         </Center>
         </ImageBackground>
       </NativeBaseProvider>
     );
 };