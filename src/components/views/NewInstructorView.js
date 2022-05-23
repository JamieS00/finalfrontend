


const NewInstructorView = (props) => {
    const {handleChange, handleSubmit } = props;
  
    //FORM TO ADD NEW INSTRCUTOR 
    return (
      <div className="root">
        <div className="formContainer">
          <div className="formTitle">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              New Instructor
            </h2>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Firstname: </label>
            <input type="text" name="Firstname" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Lastname: </label>
            <input type="text" name="Lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <button type="submit">
              Submit
            </button>
            <br/>
            <br/>
          </form>
          </div>
        </div>
      
    )
  }
  
  export default NewInstructorView;