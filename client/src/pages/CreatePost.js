import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const CreatePost = () => {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a title!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Title:</label>
                <ErrorMessage name='title' component="span" />
                <Field autoComplete="off"  id="inputCreatePost" name="title" placeholder="Title..." />
                <label>Post:</label>
                <ErrorMessage name='postText' component="span" />
                <Field  autoComplete="off" id="inputCreatePost" name="postText" placeholder="Post..." />
                <label>Username:</label>
                <ErrorMessage name='username' component="span" />
                <Field  autoComplete="off" id="inputCreatePost" name="username" placeholder="Username..." />
                
                <button type="submit">Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost