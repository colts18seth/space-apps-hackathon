import React from 'react';
import { Formik, Field, Form } from 'formik';
import './NewResourceForm.css';

function NewResourceForm() {
    return (
        <div className="NewResourceForm">
            <h1>Add Resource</h1>
            <Formik
                initialValues={{
                    name: '',
                    url: '',
                    description: '',

                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                <Form className="form">
                    <label htmlFor="name">Name:</label>
                    <Field id="name" name="name" />

                    <label htmlFor="url">URL:</label>
                    <Field id="url" name="url" />

                    <label htmlFor="description">Description:</label>
                    <Field id="description" name="description" />

                    <label>
                        <Field type='checkbox' id="account_required" name="account_required" />
                        Account Required?
                    </label>

                    <label>
                        <Field type='checkbox' id="public" name="public" />
                        Public / Open Source?
                    </label>

                    <div className="divLabel">Category</div>
                    <label>
                        <Field type='checkbox' id="air" name="air" />
                            Air
                        </label>
                    <label>
                        <Field type='checkbox' id="land" name="land" />
                            Land
                        </label>
                    <label>
                        <Field type='checkbox' id="sky" name="sky" />
                            Sky
                        </label>
                    <label>
                        <Field type='checkbox' id="Water" name="Water" />
                            Water
                        </label>
                    <label>
                        <Field type='checkbox' id="climate" name="climate" />
                            Climate Change
                        </label>
                    <label>
                        <Field type='checkbox' id="agriculture" name="agriculture" />
                            Agriculture
                        </label>


                    <div className="divLabel">Type
                    </div>
                    <label>
                        <Field type='checkbox' id="image" name="image" />
                            Image
                        </label>
                    <label>
                        <Field type='checkbox' id="data" name="data" />
                            Raw Data
                        </label>


                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default NewResourceForm;