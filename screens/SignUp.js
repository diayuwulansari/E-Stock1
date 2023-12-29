import React, { useState } from 'react';
import { Center, Box, Heading, FormControl, Input, Button, Image, ScrollView } from 'native-base';
import { auth } from '../src/utils/firebase';

const SignUp = () => {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful sign-up
      })
      .catch((error) => {
        // Handle sign-up error
        console.log(error.message);
      });
  };

  return (
    <Center flex={1} w="100%" justifyContent="flex-end">
      <Image
        source={require('../assets/bgLogin.jpg')}
        alt="Background Image"
        resizeMode="cover"
        height="50%"
        width="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
      />
      <Box safeArea p="8" py="8" w="100%" maxW="100%" bg="white" borderRadius="30" borderBottomRadius="0" >
        <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Welcome
        </Heading>
            <ScrollView>
              <FormControl>
                <FormControl.Label>Nama</FormControl.Label>
                  <Input
                    value={nama}
                    onChangeText={setNama}
                    height={35}
                  /> 
              </FormControl>
              
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                  <Input
                      label="Email"
                      value={email}
                      onChangeText={setEmail}
                      height={35}
                    />
              </FormControl>
                
              <FormControl>
                <FormControl.Label>No. Handphone</FormControl.Label>
                  <Input
                    label="No. Handphone"
                    keyboardType="phone-pad"
                    value={nohp}
                    onChangeText={setNohp}
                    height={35}
                  />
              </FormControl>  

              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                    label="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    height={35}
                  />
              </FormControl>  
                
            </ScrollView>

            <Button
              mt="5" colorScheme="indigo"
              onPress={handleSignUp}
              width={350} // Atur lebar sesuai yang diinginkan
              height={43} // Atur tinggi sesuai yang diinginkan
            >
              Sign Up
            </Button>
      </Box>
    </Center>
  );
};

export default SignUp;
