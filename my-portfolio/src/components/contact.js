import React from 'react';

const contact = function () {
    return (
        <>
            <h1>Contact Mat</h1>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                    <div class ="input-field col s6">
                    <i class ="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type ="text" class ="validate"></input>
                    <label for="icon_prefix">Name</label>
                    </div>
                    <div class ="input-field col s6">
                    <i class ="material-icons prefix">email</i>
                    <input id="icon_email" type ="email" class ="validate"></input>
                    <label for="icon_email">Email</label>
                    </div>
                    <br/>
                    <div class ="input-field col s12">
                    <i class ="material-icons prefix">chat</i>
                    <input id="icon_prefix" type ="text" class ="validate"></input>
                    <label for="icon_prefix">Message</label>
                    </div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default contact;