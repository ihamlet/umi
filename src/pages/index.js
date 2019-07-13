import { Layout } from 'antd'

class BasicLayout extends React.Component{

    render(){
        const contentStyle = {
            background: '#fff'
        }
    
        return(
            <Layout>
                <Layout.Sider>
                    slider
                </Layout.Sider>
                <Layout>
                    <Layout.Header>Header</Layout.Header>
                    <Layout.Content style={contentStyle}>
                        content
                        {this.props.children}
                    </Layout.Content>
                    <Layout.Footer>Footer</Layout.Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout