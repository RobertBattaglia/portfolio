import React from 'react'
import styled from '@emotion/styled'
import LazyLoad from 'react-lazy-load'

const AppCard = styled('figure')`
  text-decoration: none !important;
  cursor: default;
  min-height: 420px;
  width: 320px;
  margin: 1rem;
  background-color: #e6ecf8;
  border: solid black 5px;
  `
const ImgWrapper = styled(LazyLoad)`
  height: 210px;
  padding: 1rem;
  background-color: #fff;
  border: solid #e6ecf8 10px;
`

const Img = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const Title = styled('h4')`
  margin: 1rem 0 0 0;
  font-size: min(calc(20px + 1vw), 32px);
`

const Description = styled('p')`
  margin: 0;
  padding: 1.5rem;
  line-height: 1.1;
  font-size: min(calc(14px + 0.5vw), 18px);
`

const App = (props) => {
  const {
    src, title, link, desc,
  } = props.app

  return (
    <AppCard>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title}, ${desc}`}
      >
        <ImgWrapper height={210} offsetVertical={1000}>
          <Img src={require(`assets/images/applications/${src}`)} alt={title} />
        </ImgWrapper>
      </a>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: desc }} />
    </AppCard>
  )
}

export default App
