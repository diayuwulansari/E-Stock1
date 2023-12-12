import { Heading, Image, Text, FlatList, Center, Button,  Input, Icon, Ionicons,  HStack, AspectRatio   } from "native-base";
import { Box, ScrollView } from "native-base";
import { Pressable, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datass";
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BlushOn = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <>
      
       <Box>
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
      <Button  size='md' bg='#FFCBA4'>
        <Text color='black'>Tambah Produk </Text>
      </Button>
      
      

    </>
  );
};

export default BlushOn;