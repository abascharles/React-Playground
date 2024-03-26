
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from"./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
function App() {
return(
    <>
        <Header/>

        <Card/>
        <Food/>

        <Button/>
        <Footer/>

        <Student name = 'Spongebob' age = {30} isStudent = {true}/>
        <Student name = 'Patrick' age = {42} isStudent = {false}/>
        <Student name = "Squidward" age ={40} isStudent ={false}/>
        {/*PropTypes*/}
        <Student name = "Sandy" age = {27} isStudent= {true}/>
        {/*defaultProps*/}
        <Student/>

    {/*    Conditional rendering*/}
        <UserGreeting isLoggedIn = {true}  username = "Ustadh" />
    </>
);
}

export default App
