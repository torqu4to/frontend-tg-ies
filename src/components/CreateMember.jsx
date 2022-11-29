import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { createMembers } from "../services/api";

const CreateMember = () => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    createMembers(cpf, name, dob, tel, email).then(() => {
      history("/");
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Data nasc.</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tel</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateMember;