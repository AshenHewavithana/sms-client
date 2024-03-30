import { useState, useEffect } from "react"
import axios from "axios";
import {FaEdit, FaEye, FaIcons, FaPen, FaPenAlt, FaPenFancy, FaRegEdit, FaTrashAlt, FaUserEdit} from "react-icons/fa"
import {Link} from 'react-router-dom'


const StudentsView = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, [])

    const loadStudents = async() => {
        const result = await axios.get("http://localhost:8080/students",{
            validateStatus: () => {
                return true;
            }
        });
        if(result.status == 302) {
            setStudents(result.data)
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/students/delete/${id}`)
        loadStudents();
    }

    return (
        <section>
            <div>
                <h1 className="text-center text-uppercase mb-5 font-bold">Student List</h1>
            </div>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>No.</th>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Faculty</th>
                        <th>Department</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>ST/{student.faculty}/0{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.gender}</td>
                            <td>{student.email}</td>
                            <td>{student.mobileNo}</td>
                            <td>{student.faculty}</td>
                            <td>{student.department}</td>
                            <td className="mx-2">
                                <Link to={`/student-profile/${student.id}`} className="btn btn-primary">
                                    <FaEye/>
                                </Link>
                            </td>
                            <td className="mx-2">
                                <Link to={`/edit-student/${student.id}`} className="btn btn-success">
                                    <FaPen/>
                                </Link>
                            </td>
                            <td className="mx-2">
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(student.id)}>
                                    <FaTrashAlt/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    ) 
}

export default StudentsView