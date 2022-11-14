import React, {useContext} from 'react';
import {authContext} from '../context/AuthContext';
import {chakra, Flex, Heading, VStack, Input} from '@chakra-ui/react';

export default function SingUp() {
  const {handleSignIn, handleSignUp} = useContext(authContext);
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <VStack>
        <Heading>create new account</Heading>
        <form action='' onSubmit={handleSignUp}>
          <VStack
            borderWidth='2px'
            borderRadius='lg'
            padding='4'
            mt='2em'
            mb='2em'
          >
            <Input type='text' placeholder='username...' name='username' />
            <Input type='email' placeholder='email...' name='email' />
            <Input type='text' placeholder='password...' name='password' />

            <chakra.button
              type='submit'
              px='3'
              py='2'
              bg='blue.200'
              rounded='md'
              _hover={{bg: 'blue.300'}}
            >
              Save
            </chakra.button>
          </VStack>
        </form>

        <Heading>log in</Heading>
        <Flex borderWidth='2px' borderRadius='lg' padding='4'>
          <form action='' onSubmit={handleSignIn}>
            <VStack>
              <Input type='email' placeholder='email...' name='email' />
              <Input
                type='password'
                placeholder='password...'
                name='password'
              />
              <chakra.button
                type='submit'
                px='3'
                py='2'
                bg='blue.200'
                rounded='md'
                _hover={{bg: 'blue.300'}}
              >
                login
              </chakra.button>
            </VStack>
          </form>
        </Flex>
      </VStack>
    </Flex>
  );
}
