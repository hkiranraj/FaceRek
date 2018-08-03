import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../actions/index';

import Header from './header';
import UserList from './user-list';
import UserInfo from './user-info';
import Summary from './summary';
import UserTansactions from './user-transactions';
import UserPromotions from './user-promotions';
import Column from './column';

class App extends Component {
    render(){
        return (
            <div>
                <Header data="Retail Customer Mapping App" />
                <div className="container">
                    <div className="row">
                        <Column title="Customer Info">
                            <UserInfo userData={this.props.posts} />
                        </Column>
                        <Column title="Summary">
                            <Summary />
                        </Column>
                        <Column title="Transaction History" cardBdyCls="p-0">
                            <UserTansactions data={this.props.posts.promotions} />
                        </Column>
                        <Column title="Promotion &amp; Offers">
                            <UserPromotions />
                        </Column>
                    </div>
                </div>
                <UserList />
            </div>
        )
    }
}

function mapStateToProps({ posts }){
    return { posts }
}

export default connect(mapStateToProps)(App);