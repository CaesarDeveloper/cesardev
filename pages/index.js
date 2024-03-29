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
            César Arguijo
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
          Experienced Software Developer adept in bringing forth expertise in
          design, installation, testing and maintenance of software systems.
          Equipped with a diverse and promising skill-set. Proficient in various
          platforms, languages, and embedded systems. Experienced with the
          latest cutting edge development tools and procedures. Able to
          effectively self-manage during independent projects, as well as
          collaborate as part of a productive team.{' '}
          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2015</BioYear>
          Completed the Computer Science Engineer at Universidad EPCA
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Diploma in Project Management
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>I participated in the Microsoft Student
          Partners program
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Collaborated in financial account management system for BanBajio Bank
          at UPPERBUSINESS DIVISION
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

export default Home
export { getServerSideProps } from '../components/chakra'
