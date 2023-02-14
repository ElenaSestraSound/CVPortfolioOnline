import { Inter } from '@next/font/google'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Heading as='h1' size='4xl' noOfLines={1}>
        Example
      </Heading>
    </>
  )
}
