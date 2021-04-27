import React, {useEffect, useState} from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ClientContainer from "./ClientContainer";
const ClientList = ({mostrarForm}) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        // buscarClientes();
    }, [])

    const buscarClientes = () => {
        axios.get("http://localhost:8080/user-controller/list")
            .then(resultado => {
                setClientes(resultado.data)
            } )
    }

    return (
        <div className="card">
            <Button label="cadastrar"  onClick={() => mostrarForm(true)}/>

            <DataTable value={clientes}>
                <Column field="nome" header="Nome"></Column>
                <Column field="cpf" header="cpf"></Column>
                <Column field="email" header="email"></Column>
                <Column field="celular" header="celular"></Column>
                <Column field="localizacao" header="localizacao"></Column>
                <Column field="status" header="status"></Column>
            </DataTable>
        </div>
    )
};

export default ClientList;