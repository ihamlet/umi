class Card extends React.Component{
    render(){
        return ( 
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}