import PropTypes from 'prop-types';

// props = read-only properties that are shared between components
//         A parent component can send data to a child component.
//         <component key = value/>
function Student(props){
    return(

        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student: {props.isStudent? "Yes":"No"}</p>
        </div>
    );

}
//PropTypes = a mechanism that ensures that passed value
//            is of the correct data type.
//            age:propType.number

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

//defaultProps = default values for props in case they are not
//            passed from the parent component
//            name:"Guest"



Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student;
