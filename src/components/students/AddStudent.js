import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {

    let navigate = useNavigate();

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        mobileNo: '',
        faculty: '',
        department: ''
    });

    const {firstName, lastName, gender, email, mobileNo, faculty, department} = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name] : e.target.value});
    };

    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/students", student);
        navigate("/view-students");
    }

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow-lg'>
            <div>
                <h1 className="text-center text-uppercase mb-3 font-bold">ADD NEW STUDENT</h1>
            </div>
            <form onSubmit={(e) => saveStudent(e)}>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='firstName' 
                        id='firstName' 
                        value={firstName} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='First Name' 
                        required
                    />
                    <label htmlFor='firstName'>
                    First Name
                    </label>
                </div>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='lastName' 
                        id='lastName' 
                        value={lastName} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='Last Name' 
                        required
                    />
                    <label htmlFor='lastName'>
                    Last Name
                    </label>
                </div>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='gender' 
                        id='gender' 
                        value={gender} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='Gender' 
                        required
                    />
                    <label htmlFor='gender'>
                    Gender
                    </label>
                </div>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='email' 
                        id='email' 
                        value={email} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='Email Address' 
                        required
                    />
                    <label htmlFor='email'>
                    Email Address
                    </label>
                </div>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='mobileNo' 
                        id='mobileNo' 
                        value={mobileNo} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='Mobile Number' 
                        required
                    />
                    <label htmlFor='mobileNo'>
                    Mobile Number
                    </label>
                </div>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='faculty' 
                        id='faculty' 
                        value={faculty} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='Faculty' 
                        required
                    />
                    <label htmlFor='faculty'>
                    Faculty
                    </label>
                </div>
                <div className='form-floating mb-3'>
                    <input 
                        className='form-control' 
                        type='text' name='department' 
                        id='department' 
                        value={department} 
                        onChange={(e) => handleInputChange(e)} 
                        placeholder='Department' 
                        required
                    />
                    <label htmlFor='department'>
                    Department
                    </label>
                </div>

                <div className='row mb-4'>
                    <div className='col-sm-2'>
                        <button className='btn btn-outline-success btn-lg' type='submit'>
                            Save
                        </button>
                    </div>
                    <div className='col-sm-2'>
                        <Link to={"/view-students"} className='btn btn-outline-danger btn-lg' type='submit'>
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddStudent