import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

export const WorkListItem = ({ children, id, title, thumbnail }) => (
  <WorkItemStyle>
    <ProjectContent>
      <p className="project-overline" style={{
        margin: '10px 0px',
        color: '#64ffda',
        fontFamily: `'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace`,
        fontSize: '13px',
        fontWeight: '400'
      }}>Featured Project</p>
      <h3 className="project-title"><a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">{title}</a></h3>
      <ProjectDescription>
        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="noopener noreferrer">Visual Studio Marketplace</a>, <a href="https://packagecontrol.io/packages/Halcyon%20Theme" target="_blank" rel="noopener noreferrer">Package Control</a>, <a href="https://atom.io/themes/halcyon-syntax" target="_blank" rel="noopener noreferrer">Atom Package Manager</a>, and <a href="https://www.npmjs.com/package/hyper-halcyon-theme" target="_blank" rel="noopener noreferrer">npm</a>.</p>
      </ProjectDescription>
      <ul className="project-tech-list"><li>VS Code</li><li>Sublime Text</li><li>Atom</li><li>iTerm2</li><li>Hyper</li></ul>
      <div className="project-links"><a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>      
    </ProjectContent>

    <ProjectImage >      
      <Image
          src={thumbnail}
          alt={title}        
          placeholder="blur"
        />
    </ProjectImage>
  </WorkItemStyle>
)

const WorkItemStyle = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
`

const ProjectContent = styled.div`
  grid-column: 7 / -1;
  text-align: right;
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
`
const ProjectImage = styled.div`
  gridColumn: 1 / 8;
  boxShadow: 0 10px 30px -15px rgba(2,12,27,0.7);
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  zIndex: 1;
  width: 100%;
  height: 100%;
  background-color: var(--green);
  border-radius: 4px;
  vertical-align: middle;
`

const ProjectDescription = styled.div`
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 4px;
    background-color: #112240;
    color: #a8b2d1;
    font-size: 18px;
`