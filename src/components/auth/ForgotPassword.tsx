import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    setIsForgotPassword: Dispatch<SetStateAction<boolean>>
}


const ForgotPasswordForm = ({ setIsForgotPassword }: Props) => {
    return (
        <Flex
            dir='rtl'
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: '2xl' }}>
                    نسيت كلمة المرور؟
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    ستتلقى بريدًا إلكترونيًا لإعادة تعيين كلمة المرور الخاصة بك.
                </Text>
                <FormControl id="email">
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        textAlign='left'
                    />
                </FormControl>
                <Stack spacing={2}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        إرسال
                    </Button>
                    <Text color={'blue.500'} onClick={() => setIsForgotPassword(false)}>
                        <Link href={""}>نسيت كلمة المرور؟</Link>
                    </Text>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default ForgotPasswordForm;