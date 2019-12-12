// Higher Order Component -> A Component that renders another component
// Reuse code
// Render Highjacking
//Prop manipulation
// Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is :{props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin && <p>This is private Info Please Dont Share</p>
            }
            <WrappedComponent {...props}/>
        </div>
    )
} 

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
       <div>
            {
            props.isAuth ? <WrappedComponent {...props}/> : <p>Please Authenticate</p>
        }
       </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuth={true} info="This is the info" />, document.querySelector('#app'))