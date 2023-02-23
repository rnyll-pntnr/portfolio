import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderPartial from './layouts/header.partial'
import FooterPartial from './layouts/footer.partial'
import {
  Layout,
  ConfigProvider,
  theme
} from 'antd'


export default function App({ Component, pageProps }: AppProps) {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
  <>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
    }}>
      <Layout>
        <HeaderPartial />
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Component {...pageProps} style={{ background: colorBgContainer }} />
        </div>
        <FooterPartial />
      </Layout>
    </ConfigProvider>
  </>
  )
}
