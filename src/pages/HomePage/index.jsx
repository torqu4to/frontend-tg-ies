import React, { useEffect, useContext, useState } from "react";

import { AuthContext } from "../../contexts/auth";

import { getMembers, deleteMembers } from "../../services/api";

import { Table, Button } from 'reactstrap';

import UpdateMember from "../../components/UpdateMember";





const HomePage = () => {
    const { logout } = useContext(AuthContext)
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        (async () => {
            const response = await getMembers()
            setMembers(response.data)
            setLoading(false)
        })();
    }, [])

    // const LoadEdit = (args) => {
    //     const [modal, setModal] = useState(false);

    //     const toggle = () => setModal(!modal);

    //     return (
    //         <div>
    //             {/* <Button color="danger" onClick={toggle}>
    //             Click Me
    //             </Button> */}
    //             <Modal isOpen={modal} toggle={toggle} {...args}>
    //                 <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    //                 <ModalBody>
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //                     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                     aliquip ex ea commodo consequat. Duis aute irure dolor in
    //                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //                     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                     culpa qui officia deserunt mollit anim id est laborum.
    //                 </ModalBody>
    //                 <ModalFooter>
    //                     <Button color="primary" onClick={toggle}>
    //                         Do Something
    //                     </Button>{' '}
    //                     <Button color="secondary" onClick={toggle}>
    //                         Cancel
    //                     </Button>
    //                 </ModalFooter>
    //             </Modal>
    //         </div>
    //     );
    // }

    const Removefunction = (id) => {
        if (window.confirm('Você quer realmente excluir?')) {
            deleteMembers(id).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    const handleLogout = () => {
        logout()
    }

    if (loading) {
        return <div className="loading">Carregando dados...</div>
    }

    return ( 
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
            <Table
            size=""
            striped
            >
            <thead className="text-center bg-dark text-white">
                <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Data nasc.</th>
                    <th>Tel</th>
                    <th>E-mail</th>
                    <th>Ativo</th>
                </tr>
            </thead>
            <tbody className="text-center">
                    {members.map((members) => (
                        <tr key={members.id}>
                            <th scope="row">{members.cpf}</th>
                            <td>{members.name}</td>
                            <td >{members.dob}</td>
                            <td>{members.tel}</td>
                            <td>{members.email}</td>
                            <td>
                            <Button color="primary" onClick={() => { UpdateMember(members.id) }}>Editar</Button>{' '}
                            <Button color="danger" onClick={() => { Removefunction(members.id) }}>Excluir</Button>{' '}
                            </td>
                        </tr>
                    ))}
            </tbody>
            </Table>

            {/* <ul>
                {members.map((members)=> (
                    <li key={members.id}>
                        {members.id} - {members.email} - {members.name}
                    </li>
                ))}
            </ul> */}
        </>
    )
}

export default HomePage