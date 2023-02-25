import Head from 'next/head'
import Image from 'next/image'
import {
  Layout,
  Carousel,
  Row,
  Col
} from 'antd'
import p1Img from '../public/img/Achievement.png'

const { Content } = Layout

export default function Home() {
  const carouselStyle: React.CSSProperties = {
    height: '50vh',
    color: '#fff',
    lineHeight: '50vh',
    textAlign: 'center',
    background: '#364d79',
    fontSize: '5vh',
    display: 'block',
    margin: 'auto',
    justifyContent: 'center'
  }

  return (
    <>
      <Head>
        <title>Ranyll Puntanar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content className='layout' style={{ minHeight: '100vh', color: 'black' }}>
        <Carousel>
          <Row>
            <Col span={24}>
              <h1 style={carouselStyle}>My Portfolio</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <h1 style={carouselStyle}>
              This is test
            </h1>
            </Col>
            <Col style={{ textAlign: 'center', backgroundColor: '#364d79', display: 'none' }}>
              <Image
                src={p1Img}
                alt="Picture of the author"
                width={500}
                height={500}
                style={carouselStyle}
              />
            </Col>
          </Row>
        </Carousel>
      </Content>
    </>
  )
}
