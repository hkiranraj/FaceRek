import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUserInfo } from '../actions/index';
import Websocket from 'react-websocket';
import UserImg from '../images/user.png';


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLists: []
        }
        this.selectUser = this.selectUser.bind(this);
    }

    componentDidMount(){
        if(this.state.userLists[0]){
            this.props.fetchUserInfo(this.state.userLists[0].data.cust);
        }
    }

    selectUser(e){
        e.preventDefault();
        this.props.fetchUserInfo(e.target.id);
    }

    handleData(data) {
        this.setState(prevState => ({
            userLists: [ ...prevState.userLists, data]
        }))
    }

    render(){
        let content = this.state.userLists.map(({data}) => {
            let userImgUrl = data.img ? `data:image/png;base64, ${data.img}` : UserImg;
            return(
                <div className="col-xs-4 p-1" key={data.cust} onClick={this.selectUser}>
                    <a href="#" ref="" className="d-block fi-profile-img">
                        <img src={userImgUrl} id={data.cust} className="img-thumbnail border" alt={data.cust} />
                    </a>
                </div>
            )
        })
        return (
            <div className="fixed-bottom position-sticky bg-dark pl-3 pr-3 text-white testimonial-group">
                <div className="row text-center">
                    {content == '' ? <div className="p-4">No Active User</div> : content}
                </div>
                <Websocket url='ws://18.130.25.47:8766/'
                onMessage={this.handleData.bind(this)}/>
            </div>
        )
    }
}

export default connect(null, { fetchUserInfo })(UserList);
