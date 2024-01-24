import React from "react";
import './App.css'
import { useFormik } from "formik";
import * as Yup from 'yup'
function Login(){
    let [student,setStudent]=React.useState([])
    let studentform = useFormik({
        initialValues:{
            username:'',
            password:'', 
        },
        validationSchema:Yup.object({
            username:Yup.string().min(5, 'Please Enter Valid Username').required('Please Enter the Username'),
            password:Yup.string().min(5, "Password is Too Short").required('Please Enter the password'),
        }),
        onSubmit:(values)=>{
            setStudent([...student,values])
            console.log(values);
        }
    })
    // .min(2, 'Too Short!')
    // .max(50, 'Too Long!')
    return(
        <div className="main">
        <div className="mybox">
            {console.log(studentform)}
            <h1 className='p-5 text-info text-center'>Login</h1>
            <form onSubmit={studentform.handleSubmit} >
            <div>
                    <b>{studentform.touched.username && studentform.errors.username}</b>
                </div>
                <div className="form-floating">
                <input type="text" name='username'className='form-control' placeholder="firstname" onChange={studentform.handleChange} onBlur={studentform.handleBlur} /><br /><br />
                <label for="floatingInput">Username</label>
                </div>
                <div>
                    <b>{studentform.touched.password && studentform.errors.password}</b>
                </div>
                <div className="form-floating">
                     <input type="password" name='password'className="form-control" id='floatingln' placeholder="lastname" onChange={studentform.handleChange} onBlur={studentform.handleBlur}/><br /><br />
                     <label>Password</label>
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
        </div>
        <div>
                <ul className="d-flex flex-wrap justify-content-around">
                    {
                        student.map((a)=>{
                            return (
                                <li style={{listStyle:'none'}}  className="border border-success p-2 w-25">
                                    <h2><i>Username :</i> {a.username}</h2>
                                    <h2><i>Password :</i> {a.password}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Login