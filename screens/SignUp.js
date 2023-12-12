import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Image } from 'native-base';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (email === 'estock.com' && password === 'estock123') {
      // Navigasi ke halaman Login setelah sign-in berhasil
      navigation.navigate('Login');
    } else {
      alert('Sign-in gagal. Periksa email dan password Anda.');
    }
  };

  const handleLogin = () => {
    // Gantilah 'Login' dengan nama rute atau nama komponen halaman login Anda
    navigation.navigate('Login');
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

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={email} onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(text) => setPassword(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(text) => setPassword(text)} />
          </FormControl>
          
          <Button mt="5" colorScheme="indigo" onPress={handleSignUp}> 
            SignUp
          </Button>

          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
              Back to.{" "}
            </Text>
            
            {/* ini akan mengarahkan tombol sign up ke halaman login */}
            <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={handleLogin}>
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;

