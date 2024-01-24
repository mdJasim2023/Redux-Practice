import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

function Login(){
    const studentform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            age:'',
            gender:''
        },
        validationSchema:Yup.object()
        
    })
    return(
        <div>
            <form>

            </form>
        </div>
    )
}

export default Login