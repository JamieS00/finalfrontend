import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';
import { fetchAllInstructorsThunk } from "../../store/thunks";


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "", 
          instructorId: null,
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            instructorId: this.state.instructorId
        };
        
        let newInstr = await this.props.addInstructor(instructor);
        console.log(instructor);
        console.log(this.props.fetchAllInstructors());

        this.setState({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          department: this.state.department,
          instructorId: null, 
          redirect: true, 
          redirectId: newInstr.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single instructor view of newly created instructor
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}
// const mapDispatch = (dispatch) => {
//   return({
//       addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
//       fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
//   })
// }

export default connect(null, mapDispatch)(NewInstructorContainer);