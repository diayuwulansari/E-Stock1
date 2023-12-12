// import { Heading, Center } from "native-base";
// import { Header } from "../components";

// const ForYou = () => {
//     return (
//         <>
//             <Header title={"For You"} />
//             <Center flex={1}>
//                 <Heading>For You</Heading>
//             </Center>
//         </>
//     );
// };

// export default ForYou;

import { Heading, Image, Text, FlatList, Button, Input, Icon, Ionicons,  HStack, AspectRatio  } from "native-base";
import { Box } from "native-base";
import { Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";
import { AntDesign } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

const Cushion = () => {
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
      <>
      
       <Box>
       {/* <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("News Detail", { item: item })}
      > */}
      <Box
          p={"4"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
          rounded="xl"
          
        >
          
          
          <Box flex={1} mr={"4"} rounded="xl">
            <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              alt="Image Data"
            />
            
          </Box>

          
          <Box flex={1.8} rounded="xl" >
            
            <Heading lineHeight={"md"} fontSize={"md"} >
              {item.title}
            </Heading>
            <Text marginTop={3}  fontSize={"sm"}>{item.recentText}</Text>
          </Box>
          
          
        </Box>
        {/* </TouchableOpacity> */}
        </Box>
        
        
       </>
    );
  };

  return (
    <>
      <ImageBackground source={require('../assets/bg.jpg')}>
      <Box alignItems="center" rounded="xl"> 
      
      <Box flex={1}  flexDirection='column' safeArea rounded="xl">
      
      <HStack padding={4} w='100%' alignItems='center' justifyContent='space-between'>
        <Box rounded="xl">

      
        <Pressable
           onPress={() => navigation.navigate("Home")}>
            <Icon
            as={AntDesign}
            name='left'
            size={7}
            color='#000'
            safeArea
            />
            <Text>Detail Produk</Text>
          </Pressable>
           
{/* <MyHeader
      title={title}
      leftButton={
        back ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    /> */}
          
        </Box>
      
      </HStack>
       </Box>
       <Box rounded="xl">
              
       
              <AspectRatio w="100%" ratio={16 / 9}>
              
             
    
              <Box marginTop={20} >
                  <Heading color='black' marginLeft={5}>Daftar Produk</Heading>
                      <Input variant="rounded" width={320} marginTop='2' marginLeft='5' placeholder="Cari Produk..." backgroundColor='white' ftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                      
                   
              </Box>
              
                    
                    
                  
    
                
                
              </AspectRatio>
              
              
                </Box>
            
            </Box>
            
            </ImageBackground>
            
      


    
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        
      />
      <Button size='md' bg='#FFCBA4'>
      <Text color='black'>Tambah Produk </Text>
      </Button>
      
      

    </>
  );
};

export default Cushion;