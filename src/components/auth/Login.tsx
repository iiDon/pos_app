import Link from "next/link";
import { signIn } from "next-auth/react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useRouter } from "next/router";
import useProtectedRoute from "../../../hooks/protectRoutes";

interface Props {
    setIsForgotPassword: Dispatch<SetStateAction<boolean>>
}

const Login = ({ setIsForgotPassword }: Props) => {
    useProtectedRoute()
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | undefined>(undefined);
    const router = useRouter();
    const SignInHandler = () => {
        signIn('credentials', {
            redirect: false,
            email: email.current?.value,
            password: password.current?.value,
        }).then((res) => {
            if (res) {
                setError(res.error);
            } else {
                router.push('/dashboard');
            }
        })
    }








    return (

        <Flex
            dir="rtl"
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>

            <Stack spacing={8} mx={'auto'} maxW='lg' w="lg" py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'2xl'}>سجل الدخول إلى حسابك</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>الإيميل</FormLabel>
                            <Input type="email" textAlign='left' ref={email} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>كلمة المرور</FormLabel>
                            <Input type="password" textAlign='left' ref={password} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox >تذكرني</Checkbox>
                                <Text color={'blue.500'} onClick={() => setIsForgotPassword(true)}>
                                    <Link href={""}>نسيت كلمة المرور؟</Link>
                                </Text>
                            </Stack>
                            {
                                error && <Text bg='red.200' color={'red.700'} p={2} rounded="md">{error}</Text>
                            }

                            <Button
                                onClick={SignInHandler}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                تسحيل الدخول
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Login;