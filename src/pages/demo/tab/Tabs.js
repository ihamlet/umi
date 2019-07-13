import { Tabs } from 'antd'

class DemoTabs extends React.Component{

    state = {
        activeKey: '0',
        data:[{
            name:'Tab 1',
            content:'Content of Tab Pane 1 aaa',
            id: 0
        },{
            name:'Tab 2',
            content:'Content of Tab Pane 2',
            id: 1
        },{
            name:'Tab 3',
            content:'Content of Tab Pane 2',
            id: 2
        },{
            name:'Tab 4',
            content:'Content of Tab Pane 2',
            id: 3
        }]
    }

    onTabChange = (activeKey) =>{
        this.setState({ activeKey })
    }

    render(){
        return(
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                {
                    this.state.data.map(list => {
                        return <Tabs.TabPane tab={list.name} key={list.id}>{list.content}</Tabs.TabPane>
                    })
                }
            </Tabs>
        )
    }
}

export default DemoTabs