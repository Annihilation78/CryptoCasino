import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("¡Formulario enviado con éxito!");
  };
  return (
        <div class="login-container">
        <h2>Ingresa a tu cuenta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="input-group">
            <label for="usuario">Usuario:</label>
            <input
              type="text"
              name="usuario"
              {...register("usuario", { required: "Este campo es requerido" })}/>
              {errors.nombre && <p>{errors.nombre.message}</p>}
          </div>
          <div class="input-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="Recuérdame">Recuérdame</label>
            <input type="checkbox" name="" id="" style={{position: "relative", right: "-5px"}}/>
          </div>
          <div>
            <li><Link to="">¿Has olvidado tu contraseña?</Link></li>
          </div>
          <div><button type="submit" class="login-btn">Iniciar sesión</button></div>
          <div>
            <li><Link to="/register">¿No tienes cuenta?</Link></li>
          </div>
        </form>
        </div>
  );
}

export default Login;
