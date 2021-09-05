import { Flex, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { useMeQuery } from '../../hooks/useMeQuery';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';
import { useLogoutMutation } from '../../hooks/useLogoutMutation';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const { data } = useMeQuery();
  const { mutateAsync } = useLogoutMutation();
  const router = useRouter();

  const logout = () => {
    mutateAsync()
      .then(() => {
        router.reload();
      })
      .catch((e) => console.error(e));
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height={16}
      bg="gray.400"
      p={4}
    >
      <Text as="span" fontSize={20}>
        Shop Service
      </Text>
      {data ? (
        <Flex
          justifyContent="space-evenly"
          maxW="300px"
          w="25%"
          alignItems="center"
        >
          <Text verticalAlign="middle" fontSize={16}>
            Hi {data.username}
          </Text>
          <Button onClick={() => logout()} size="sm">
            Logout
          </Button>
        </Flex>
      ) : (
        <NextLink href="/login">
          <Link>Login</Link>
        </NextLink>
      )}
    </Flex>
  );
};
