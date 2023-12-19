import { useState } from 'react';
import './App.css';

function App() {


  const [formData, setFormData] = useState({
         firstName: "", 
         lastName: "",
         email:"",
         comments:"",
         isVisible:true, 
         mode:"", 
         PrefCompany:"",
  });
  

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value,
      };
    });
  }

  // function changeHandler(event){
  //   return{
  // //     [name]: type === "checkbox" ? checked : va
  // //   }
    
  // }


  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("Finally printing the entireform ka data ........")
    console.log(formData);
  }


  return (
  <div className="App">
    <h1>App is running on Port:3000</h1>
      <form onSubmit={submitHandler}>
      <br/>
        <input
          type = "text"
          placeholder = "first name"
          onChange={changeHandler}  
          name = "firstName"
          value={formData.firstName}
        />
   
   
   <br/>
   <br/>
  
        <input 
          type = "text"
          placeholder = "Last Name"
          onChange={changeHandler}
          name = "lastName"
          value={formData.lastName}
        />
       

   <br />
   <br />


        <input 
        type = "email"
        placeholder = "E mail"
        name = "email"
        onChange={changeHandler}
        value={formData.email}
        />


  <br />
  <br />  
        
        <textarea
        placeholder = "Enter your comments here"
        onChange={changeHandler}
        name = "comments"
        value={formData.comments}
        />

   <br />
   <br />
        
        <input 
        type = "checkbox"
        onChange={changeHandler}
        name = "isVisible"
        id = "isVisible"
        checked = {formData.isVisible}
        />
         <label htmlFor='isVisible'>Agree to All terms</label>
        

        <br/>
        <br/>


        <fieldset>
           <legend>Mode:</legend>


        <input 
          type='radio'
          onChange={changeHandler}
          name = "mode"
          id = "offline-mode"
          // value = "offlinemode"
          value = "offline-mode"
          checked = {formData.mode === "offline-mode"}
        />
        <label htmlFor='offline-mode'>Offline mode</label>

        <input 
          type='radio'
          onChange={changeHandler}
          name = "mode"
          id = "online-mode"
          value = "online-mode"
          // value = "onlinemode"
          checked = {formData.mode === "online-mode"}
        />
        <label htmlFor='online-mode'>Online Mode</label>
     </fieldset>
      



     <br/>
     <br/>



     <label htmlFor='prefCompany'>Select the company of your choice: </label>
     <select 
       name = "pref-Company"
       id = "prefCompany"
       value = {formData.prefCompany}
       onChange = {changeHandler}
      >
      <option value="google">google</option>
      <option value="morgan">J P Morgan</option>
      <option value="samsung">SAMSUNG</option>
      <option value="amazon">Amazon</option>
      <option value="microsoft">Microsoft</option>

     </select>
     

     <br/>
     <br/>
     
     <button>Submit</button>
      </form>
  </div>
  );
}

export default App;
