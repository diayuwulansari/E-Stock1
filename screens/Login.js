import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { auth } from '../src/utils/firebase';

const Login = ({ navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful login
    })
    .catch((error) => {
      // Handle login error
      console.log(error.message);
    });
  };

  return (
    <Center flex={1} w="100%" justifyContent="flex-end">
      {/* untuk mengatur baground image */}
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
            <Input value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={setPassword} secureTextEntry />
          </FormControl>
          <Button mt="5" colorScheme="indigo" onPress={handleLogin}>
            Login
          </Button>

          {/* Tautan untuk SignUp */}
          <HStack justifyContent="center" mt="3">
            <Text fontSize="md" color="coolGray.600">
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text fontSize="md" color="indigo.500">
                SignUp
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
