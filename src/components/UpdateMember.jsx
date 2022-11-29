import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const UpdateMember = () => {
    const [id, setId] = useState("");
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setCpf(localStorage.getItem("cpf"));
    setName(localStorage.getItem("name"));
    setDob(localStorage.getItem("dob"));
    setTel(localStorage.getItem("tel"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", cpf);
    axios
      .put(`https://localhost:5000/${id}`, {
        cpf: cpf,
        name: name,
        dob: dob,
        tel: tel,
        email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input
            type="text"
            className="form-control"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Data nasc.</label>
          <input
            type="text"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tel</label>
          <input
            type="text"
            className="form-control"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Atualizar
        </button>
        <Link to="/">
          <button className="btn btn-secondary mx-2"> Voltar </button>
        </Link>
      </form>
    </>
  );
};

export default UpdateMember;