import React, {useState} from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";

const ClientContainer = () => {
    const [formEnabled, setFormEnabled] = useState(false)

    return (
        <div>
            {
                formEnabled ?
                    <ClientForm mostrarForm={setFormEnabled}/> :
                    <ClientList mostrarForm={setFormEnabled}/>
            }
        </div>
    )

};

export default ClientContainer;