import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

import{connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addTech} from '../../actions/techActions'

const AddTechModal = ({addTech}) => {

    const [firstName, setfirstName]= useState('');
    const [lastName, setlastName] =useState('');
    

    // Checking for errors

    const onSubmit=()=>{
        if(firstName === "" || lastName === ''){
            M.toast({html:'Please enter first and last name'})
        } else{
       addTech({firstName,
                lastName});
                M.toast({html:`${firstName} ${lastName} was added!`})
        //Clear fields
        setfirstName("");
        setlastName("");
        
        }

    }

    return (
        <div id='add-tech-modal' className='modal' >
          <div className='modal-content'>
                <h4>New Technician</h4>
                <div className = "row">
                    <div className="input-field">
                        <input 
                        type="text" 
                        name="firstName"
                         value={firstName}
                          onChange={e => setfirstName(e.target.value)}
                         />
                         <label htmlFor="firstName" className='active'>
                             First Name
                         </label>
                    </div>
                </div>

                 <div className = "row">
                    <div className="input-field">
                        <input 
                        type="text" 
                        name="lastName"
                         value={lastName}
                          onChange={e => setlastName(e.target.value)}
                         />
                         <label htmlFor="lastName" className='active'>
                            Last Name
                         </label>
                    </div>
                </div>              
          </div>
          {/* Submit button */}
          <div className="modal-footer">
              <a href="#" onClick={onSubmit} className="modal-close waves-effect blue btn">
                  Enter
              </a>
          </div>

        </div>
    )
};

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}


export default connect(null, {addTech})(AddTechModal)
