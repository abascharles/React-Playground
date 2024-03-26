
import PropTypes from "prop-types";

//conditional rendering = allows you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, or change component)

function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">
                                     Welcome {props.username}
                                    </h2>
    const loginPrompt =    <h2 className="login-prompt">
                                    Please Log in to continue</h2>


    return (props.isLoggedIn ? welcomeMessage : loginPrompt);


    // if (props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Log in to continue</h2>
    // }


}


UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}


// Default
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;