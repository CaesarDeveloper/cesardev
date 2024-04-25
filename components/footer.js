import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Inspired by <a href="https://www.craftz.dog/"> Takuya Matsuyama&apos;s </a>
      personal portfolio design.
    </Box>
  )
}

export default Footer
