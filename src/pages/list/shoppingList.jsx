import AvatarPicture from './avatar/picture'

class shoppingList extends React.Component{    
    render() {
        const picture = {
            src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg'
        }

        return (
            <div className='shopping-list'>
                <AvatarPicture src={picture.src}>
                    //这里可以放 props.children
                </AvatarPicture>
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}

export default shoppingList