import React, { useState, useEffect } from "react";
import { Box, Text, Image, VStack, ScrollView, Button, Card } from "native-base";
import { clearStorage, getData } from "../src/utils/localStorage";
import FIREBASE from "../src/Config/FIREBASE";
import { Header } from '../components';


const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = () => {
    FIREBASE.auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        clearStorage();
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <>
      <Image
        source={require('../assets/homee.png')}
        alt="Alternate Text"
        size="100%"
        resizeMode="cover"
        style={{ position: 'absolute', zIndex: -1 }}
      />

      <Header title={"Profile"} />
      <Text fontSize={25} textAlign={"center"} color={"white"} 
            fontWeight={"bold"}>Welcome To Profile!</Text>

        <ScrollView>
          <VStack space={1} alignItems="center">

            <Card w="320" h="600" bg="white" rounded="md" marginTop={5} shadow={3} p={5}>
              <Image
                source={require('../assets/profil.png')}
                alt="Profile Image"
                rounded="full"
                marginBottom={5}
                width={250}
                height={250} 
                marginTop={9}
                marginLeft={4}
              />
              <Text color="black" fontWeight="bold" fontSize="xl">
                Data Diri
              </Text>
              <Box mt={5}>
                <Text color="black" fontSize="sm">
                  Email
                </Text>
                <Text color="black" fontSize="xl" mt={2}>
                  {profile?.email}
                </Text>
              </Box>
              <Box mt={5}>
                <Text color="black" fontSize="sm">
                  Nomor Ponsel
                </Text>
                <Text color="black" fontSize="xl" mt={2}>
                  {profile?.nohp}
                </Text>
              </Box>

              <Button
                bg="blue.500"
                colorScheme="#f0f"
                variant="solid"
                onPress={onSubmit}
                marginTop={5}
              >
                Logout
              </Button>
            </Card>
          </VStack>
        </ScrollView>
    </>
  );
};

export default Profile;
