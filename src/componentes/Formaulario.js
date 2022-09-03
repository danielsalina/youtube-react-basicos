import {useState} from "react";

export default function Formulario () {

    const [form, setForm] = useState({name: "", lastname: "", email: "", password: ""})

    const handleSubmit = (e) =>{
        console.log("handleSubmit", form)
        e.preventDefault();
    }

    const handleChange = (e) => {
        console.log("handleChange")
        let name = e.target.name
        let value = e.target.value
        setForm({...form, [name]:value})
    }

    return(
        <div>
            <h1>😎 Formularios En React 😎</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" value={form.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="lastname">Apellido</label>
                    <input type="text" name="lastname" id="lastname" value={form.lastname} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Registrarme</button>
            </form>
        </div>
    )
}