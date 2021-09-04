import {
  Flex,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import useLoginMutation, { LoginParams } from '../hooks/useLoginMutation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const LoginPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const errorToast = useToast();
  const { mutateAsync } = useLoginMutation();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  const onSubmit = async ({ email, password }: LoginParams) => {
    try {
      await mutateAsync({ email, password });
      router.replace('/');
    } catch (error: any) {
      errorToast({
        title: 'Authentication failed',
        description: error.response?.data.message,
        variant: 'left-accent',
        status: 'error',
        isClosable: true,
      });
    }
    reset();
  };
  return (
    <Container px={[12]} mt={8}>
      <Heading as="h1" mb={6}>
        Login
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" mb={4} isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            placeholder="Your email address..."
            {...register('email', {
              required: 'Email is required',
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" mb={4} isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            placeholder="Your password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Flex justify="center">
          <Button w="40%" type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
