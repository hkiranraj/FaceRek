import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserInfo } from '../actions/index';
 
import UserImg from '../images/user.png';

class UserInfo extends Component{

    constructor(props){
        super(props);
        this.userFormSubmit = this.userFormSubmit.bind(this);
    }

    userFormSubmit(event){
        console.log();
        event.preventDefault();
        const formData = {
            "Name": this.refs.name.value,
            "DOB": this.refs.dob.value,
            "Phone":this.refs.phone.value,
            "Email": this.refs.email.value,
            "is_hvc" : this.refs.hvc.value,
            "is_abusive" : this.refs.abusive.value,
            "self_excluded" : this.refs.selfexculded.value
        };
        this.props.saveUserInfo(this.props.userData[1], formData);
    }

    render(){
        const data = this.props.userData[0];
        let userImgUrl = UserImg;
        if(!data){
            return <div>No User Info</div>
        } else{
            userImgUrl = data.img ? `data:image/png;base64, ${data.img}` : UserImg;
            let content;
            if (data.Name !== undefined) {
                content = <dl className="row">
                            <dt className="col-5">Name:</dt>
                            <dd className="col-7">{data.Name}</dd>
                            <dt className="col-5">DOB:</dt>
                            <dd className="col-7">{data.DOB}</dd>
                            <dt className="col-5">Email:</dt>
                            <dd className="col-7">{data.Email}</dd>
                            <dt className="col-5">Phone:</dt>
                            <dd className="col-7">{data.Phone}</dd>
                            <dt className="col-5">Self Excluded:</dt>
                            <dd className="col-7">{data.self_excluded}</dd>
                            <dt className="col-5">HVC:</dt>
                            <dd className="col-7">{data.is_hvc}</dd>
                            <dt className="col-5">ABUSIVE:</dt>
                            <dd className="col-7">{data.is_abusive}</dd>
                        </dl>
            } else {
                content = <form onSubmit={this.userFormSubmit} >
                                <div className="form-group">
                                    <label htmlFor="userFormName">Name</label>
                                    <input type="text" ref="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userFormDOB">DOB</label>
                                    <input type="text" ref="dob" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userFormEmail">Email address</label>
                                    <input type="email" ref="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userFormPhone">Phone</label>
                                    <input type="tel" ref="phone" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userFormSE">Self Excluded</label>
                                    <select className="form-control" ref="selfexculded" id="userFormSE">
                                        <option defaultValue="TRUE">TRUE</option>
                                        <option selected defaultValue="FALSE">FALSE</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userFormHVC">HVC</label>
                                    <select className="form-control" ref="hvc" id="userFormHVC">
                                        <option defaultValue="TRUE">TRUE</option>
                                        <option selected defaultValue="FALSE">FALSE</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userFormAbusive">ABUSIVE</label>
                                    <select className="form-control" ref="abusive" id="userFormAbusive">
                                        <option defaultValue="TRUE">TRUE</option>
                                        <option selected defaultValue="FALSE">FALSE</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
            }
            return (
                <div className="row">
                    <div className="col-12 col-sm-4 text-center">
                        <span className="d-block mb-2 fi-profile-img"><img src={userImgUrl} className="img-thumbnail" alt="..." /></span>
                    </div>
                    <div className="col-12 col-sm-8">
                        {content}
                    </div>
                </div>
            )
        }
    }
}

export default connect(null, { saveUserInfo })(UserInfo);


