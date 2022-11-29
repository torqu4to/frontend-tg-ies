import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateMembers } from "../../services/api";

const MemberEdit = () => {
    const { memberId } = useParams();

    const [memberData, setMemberData] = useState({});

    useEffect((id) => {
        updateMembers(id).then((res) => {
            return res.json();
        }).then((resp) => {
            setCpf(resp.cpf);
            setName(resp.name);
            setEmail(resp.email);
            setTel(resp.tel);
            setDob(resp.dob);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[cpf, setCpf] = useState("");
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[tel, setTel]= useState("");
    const[dob, setDob]= useState(true);
    const[validation, setValidation]= useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const memberData = {cpf, name, email, tel, dob};

    fetch("http://localhost:5000/member/" + memberId,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(memberData)
    }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
    }).catch((err)=>{
        console.log(err.message)
    })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Member Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <input value={cpf} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Nome</label>
                                        <input required value={name} onMouseDown={e=>setValidation(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                    {name.length === 0 && validation && <span className="text-danger">Digite um nome</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Telefone</label>
                                        <input value={tel} onChange={e=>setTel(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                    <label>Data nasc.</label>
                                    <input checked={dob} onChange={e=>setDob(e.target.checked)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Salvar</button>
                                        <Link to="/" className="btn btn-danger">Voltar</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
    );
}

export default MemberEdit;