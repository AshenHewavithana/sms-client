import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import avatarMale from '../../img/male-user.png'
import avatarFemale from '../../img/female-user.png'

const StudentProfile = () => {

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

    useEffect(() => {
        loadStudent();
    }, [])

    const loadStudent = async() => {
        const result = await axios.get(`http://localhost:8080/students/${id}`);
        setStudent(result.data)
    };

    return (
        <section>
            <div>
                <h1 className="text-center text-uppercase mb-5 font-bold">Student Profile</h1>
            </div>
            <div className='container py-5 shadow'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card mb-4'>
                            <div className='card-body text-center'>
                                <img 
                                    src= {avatarMale}
                                    alt='profile-avatar'
                                    className='rounded-circle img-fluid'
                                    style={{width: 250}}
                                />
                                <h5 className='my-3'>
                                    {`${student.firstName} ${student.lastName}`}
                                </h5>
                                <div className='d-flex justify-content-center mb-2'>
                                    <button type='button' className='btn btn-outline-primary px-4'>
                                        Call
                                    </button>
                                    <button type='button' className='btn btn-outline-success ms-2'>
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <div className='card-mb-4'>
                            <div className='card-body'>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>First Name</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.firstName}
                                        </p>
                                    </div>
                                </div>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>Last Name</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.lastName}
                                        </p>
                                    </div>
                                </div>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>Gender</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.gender}
                                        </p>
                                    </div>
                                </div>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>Email Address</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.email}
                                        </p>
                                    </div>
                                </div>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>Mobile Number</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.mobileNo}
                                        </p>
                                    </div>
                                </div>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>Faculty</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.faculty}
                                        </p>
                                    </div>
                                </div>

                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>Department</h5>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='text-muted mb-0'>
                                            {student.department}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentProfile