import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import styled from '@emotion/styled'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in México!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            <TitleStyled>
              César Arguijo
            </TitleStyled>
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Experienced Full Stack Developer with over a decade of hands-on experience 
          building dynamic digital solutions. 
          Passionate about weaving immersive user experiences and devising innovative solutions across diverse 
          programming landscapes. Proficient in a multitude of languages and platforms, 
          adept at navigating the evolving technology landscape. Skilled in the full software development lifecycle, 
          from design and implementation to testing and maintenance. A self-driven professional with a knack 
          for leveraging cutting-edge tools and methodologies to deliver impactful results.          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Check Out My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2024</BioYear>
          Fullstack Developer @TRATO
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Freelance Web Developer @AgrodYAsociados
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Fullstack Developer @Neondomain
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Freelance Web Developer @DCGaskets
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Software Engineer @SMS Masivos
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Freelance Software Engineer to create desktop applicaton at @CalzadoKaroline
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Freelance Software Engineer to create desktop applicaton at @CentroMedicoDelBajio
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Software Engineer @VZERT
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Collaborated in a web platform to manage bank reports @UPPERBUSINESS DIVISION
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>I participated in the Microsoft Student
          Partners program
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Guitar,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Photography, Machine Learning
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

const TitleStyled = styled.p`
  background: -webkit-linear-gradient(117deg, rgb(129 230 217) 0%, #cc4d7d 100%) text;
  -webkit-text-fill-color: transparent;
`

export default Home
export { getServerSideProps } from '../components/chakra'
