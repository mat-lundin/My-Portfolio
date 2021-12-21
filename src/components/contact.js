import React from 'react';

const contact = function () {
    return (
        <>
            <h1>Contact Mat</h1>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type ="text" className ="validate"></input>
                    <label for="icon_prefix">Name</label>
                    </div>
                    <div className ="input-field col s6">
                    <i className ="material-icons prefix">email</i>
                    <input id="icon_email" type ="email" className ="validate"></input>
                    <label for="icon_email">Email</label>
                    </div>
                    <br/>
                    <div className ="input-field col s12">
                    <i className ="material-icons prefix">chat</i>
                    <input id="icon_prefix" type ="text" className ="validate"></input>
                    <label for="icon_prefix">Message</label>
                    </div>
                    </div>
                    <a className="waves-effect waves-light btn-large"><i className="material-icons left">email</i>Submit</a>
                </form>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
};

export default contact;