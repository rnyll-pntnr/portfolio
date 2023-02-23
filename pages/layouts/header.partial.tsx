import {
    Layout,
    Menu,
    Row
} from 'antd'

const {
    Header,
} = Layout

export default function HeaderPartial() {
    return (
        <>
            <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                {/* Image Here */}
                {/* <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                /> */}
                {/* This is the menu */}
                {/* <Menu
                    theme='dark'
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(2).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                /> */}
            </Header>
        </>
    )
}