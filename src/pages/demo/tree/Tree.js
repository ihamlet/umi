import { Tree } from 'antd'

class DemoTree extends React.Component{
    state = {
        expandedKeys: [],
        data:[{
            title:'parent 1',
            children:[{
                title: 'children parent 1'
            },{
                title: 'children parent 2'
            }]
        },{
            title:'parent 2',
            children:[{
                title: 'children parent 1'
            },{
                title: 'children parent 2'
            }]
        },{
            title:'parent 3',
            children:[{
                title: 'children parent 1'
            },{
                title: 'children parent 2'
            }]
        }]
    }
    
    onExpand = (selectedKeys) => {
        this.setState({selectedKeys})
    }

    onSelect = (selectedKeys) => {
        const { expandedKeys } = this.state
        const key = selectedKeys[0]
      
        if (expandedKeys.includes(key)) {
          // 移除 key
          this.setState({
            expandedKeys: expandedKeys.filter(k => k !== key),
          })
        } else {
          // 添加 key
          this.setState({ 
              expandedKeys: [...expandedKeys, key] 
          })
        }
    }

    render(){
        return (
            <Tree expandedKeys={this.state.expandedKeys} selectedKeys={[]} onExpand={this.onExpand} onSelect={this.onSelect}>
                {
                    this.state.data.map((node,index) =>{
                        return <Tree.TreeNode title={node.title} key={index}>
                                {
                                    node.children.map((children,childrenIndex) => {
                                        return <Tree.TreeNode title={children.title} key={`${index}-${childrenIndex}`}></Tree.TreeNode>
                                    })
                                }
                            </Tree.TreeNode>
                        
                    })
                }
            </Tree>
        )
    }
}

export default DemoTree