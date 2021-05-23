import React, { useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import {
    useToast,
    Input,
    Stack,
    InputGroup,
    Button,
    useColorMode,
    Text,
    Heading,
    InputRightElement,
    Flex,
    IconButton,
    ListItem,
    OrderedList
} from "@chakra-ui/react"

const Todo = () => {
    const toast = useToast()
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    const [todos, setTodos] = useState([
        'Passer la spécialisation "Developing Applications with Google Cloud"',
        'Développer un projet concret NextJS et le déployer sur GCP',
        'Veille et comparatif de Headless CMS'
    ])
    const [todo, setTodo] = useState('')
    const removeTodo = todo => {
        setTodos(todos.filter(t => t !== todo))
    }

    return (
        <Stack spacing={4} w="100%">
            <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2">Ma To-do list</Heading>
            <Text>Voici une liste de choses que je prévois d'apprendre de mon temps libre au cours des prochains mois.</Text>
            <InputGroup size="md" mt={4} borderColor="gray.500" borderColor={borderColor[colorMode]}>
                <Input
                    aria-label="Ajouter une idée"
                    placeholder="Créer un bot avec Pyton"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <InputRightElement width="6.75rem">
                    <Button
                        aria-label="Ajouter une idée"
                        fontWeight="bold"
                        h="1.75rem"
                        size="sm"
                        colorScheme="gray"
                        mr={2}
                        variant="outline"
                        px={10}
                        onClick={() => {
                            if (todo == '')
                                toast({
                                    title: 'Oups! Il y a un soucis',
                                    description: "Le champ ne peut pas être vide..",
                                    status: "error",
                                    duration: 3000,
                                    isClosable: true,
                                })
                            else {
                                setTodos([...todos, todo])
                                setTodo('')
                            }
                        }}
                    >
                        Ajouter
                    </Button>
                </InputRightElement>
            </InputGroup>
            <div>
                <OrderedList spacing={3}>
                    {todos.map((todo, index) => (
                        <ListItem key={index} color={colorSecondary[colorMode]}>
                            <Flex justify="space-between" align="center">
                                {todo}
                                <IconButton aria-label={`Supprimer la tâche nommée ${todo}`} icon={<DeleteIcon color="red.400" />} onClick={() => removeTodo(todo)} />
                            </Flex>
                        </ListItem>
                    ))}
                </OrderedList>
            </div>
        </Stack>

    )
}

export default Todo