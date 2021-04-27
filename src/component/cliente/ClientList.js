import React, {useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ClientContainer from "./ClientContainer";
const ClientList = ({mostrarForm}) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        buscarClientes();
    }, [])

    const buscarClientes = () => {
        axios.get("http://test.portalpostal.com.br:9083/secure/customers/")
            .then(resultado => {
                resultado && console.log("resultado", resultado);
                resultado && setClientes(resultado.data.data.customerList)
            } )
    }

    const actions = (values) => {
        console.log("values", values);
        return (
            <>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => console.log("values", values)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => "chamar delete function"} />
            </>
    )}

    return (
        <div className="card">
            <Button label="cadastrar"  onClick={() => mostrarForm(true)}/>

            <DataTable value={clientes}>
                <Column field="name" header="Nome"></Column>
                <Column field="federalId" header="cpf"></Column>
                <Column field="email" header="email"></Column>
                <Column field="celular" header="celular"></Column>
                <Column field="localizacao" header="localizacao"></Column>
                <Column field="status" header="status"></Column>
                <Column body={(rowData) => actions(rowData)}>/></Column>
            </DataTable>
        </div>
    )
};

export default ClientList;