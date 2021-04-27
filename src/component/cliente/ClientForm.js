import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import {InputSwitch} from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
const ClientForm = ({mostrarForm}) => {

    const initialState = {
        name:"",
        ativo:false,
        phone:"",
        cpf:"",
        rg:"",
        email:"",
        birthday:"",
    }

    const clienteSchema = Yup.object().shape({

        name: Yup.string()
            .required('Required'),

        ativo: Yup.boolean()
            .required('Required'),
        phone: Yup.string()
            .required('Required'),
        cpf: Yup.string()
            .required('Required'),
        rg: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),

    })


    const saveCliente = (client) => {
        // const client = {
        //     name:name,
        //     ativo:ativo,
        //     phone:phone,
        //     cpf:cpf,
        //     rg:rg,
        //     email:email,
        //     birthday:birthday,
        // }
        axios.post("http://localhost:8080/user-controller/salvar", client)
    }


    return(
        <>
            <Formik
                initialValues={initialState}
                validationSchema={clienteSchema}
                onSubmit={values => {
                    // saveCliente(values);
                    // same shape as initial values
                    console.log("values", values);
                }}
            >
                {(formik) => (
                    <Form>
                        <div className={"p-grid"}>
                            <div className="p-col-12">
                                <InputSwitch checked={formik.values.ativo} onChange={formik.handleChange} />Ativo
                            </div>
                            <div className="p-col-4">
                                Name:<br />
                                <InputText name={"name"} value={formik.values.name} onChange={formik.handleChange} />
                            </div>
                            <div className="p-col-4">
                                Telefone:<br />
                                <InputText name={"phone"} value={formik.values.phone} onChange={formik.handleChange} />
                            </div>
                            <div className="p-col-4">
                                CPF:<br />
                                <InputText name={"cpf"} value={formik.values.cpf} onChange={formik.handleChange} />
                            </div>
                            <div className="p-col-4">
                                RG:<br />
                                <InputText name={"rg"} value={formik.values.rg} onChange={formik.handleChange} />
                            </div>
                            <div className="p-col-4">
                                Email:<br />
                                <InputText name={"email"} value={formik.values.email} onChange={formik.handleChange} />
                            </div>
                            <div className="p-col-4">
                                Birthday:<br />
                                <InputText name={"birthday"} value={formik.values.birthday} onChange={formik.handleChange} />
                            </div>
                            <div className="p-col-12" style={{textAlign: "right"}}>
                                <Button label="Cancel" type={"ghost"} onClick={() => mostrarForm(false) } />
                                <Button label="Save"  type={"submit"}/>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
};




export default ClientForm;