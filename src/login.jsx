import React from "react";
import { useFormik } from "formik";
import * as  Yup from 'yup'

function Login(){
    let [std,setStd] = React.useState([])
    const studentform = useFormik({
        initialValues:{
            fname:'',
            lname:'',
            age:''
        },

        validationSchema:Yup.object({
            fname:Yup.string().required('jasim'),
            lname:Yup.string().required('jasim'),
            age:Yup.string().required('jasim')
        }),

        onSubmit:(values)=>{
            setStd([...std,values])
        }
    })

    return(
        <div>
            <form onSubmit={studentform.handleSubmit}>
                {console.log(studentform)}
                <input type="text" name="fname" onChange={studentform.handleSubmit} onBlur={studentform.handleBlur}/><br /><br />
                <div>{studentform.touched.fname && studentform.errors.fname}</div>
                <input type="text" name="lname"onChange={studentform.handleSubmit} onBlur={studentform.handleBlur}/><br /><br />
                <div>{studentform.touched.lname && studentform.errors.lname}</div>
                <input type="text" name="age"onChange={studentform.handleSubmit} onBlur={studentform.handleBlur} /><br /><br />
                <div>{studentform.touched.age && studentform.errors.age}</div>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default Login