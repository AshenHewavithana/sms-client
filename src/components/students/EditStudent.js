import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditStudent = () => {
    let navigate = useNavigate();

    const {id} = useParams();

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

    useEffect(() => {
        loadStudent();
    }, [])

    const loadStudent = async() => {
        const result = await axios.get(`http://localhost:8080/students/${id}`);
        setStudent(result.data)
    };

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name] : e.target.value});
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/students/update/${id}`, student);
        navigate("/view-students");
    }

    return (
        <div className='col-sm-8 py-2 px-5 offset-2'>
            <div>
                <h1 className="text-center text-uppercase mb-5 font-bold">EDIT STUDENT DETAILS</h1>
            </div>
            <form onSubmit={(e) => updateStudent(e)}>
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

                <div className='row mb-5'>
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

export default EditStudent