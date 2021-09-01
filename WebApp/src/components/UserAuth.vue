<template>
    <div id="AuthUser" class="auth_user">
        
        <div class="container_auth_user">
            <h2>BIENVENIDO</h2>

            <form v-on:submit.prevent="processAuthUser" >
                <div class="nombreUsuario">
                <input type="text" v-model="user_in.username" placeholder="Username">
                </div>
                <br>
                <div class="contraseñaUsuario">
                <input type="password" v-model="user_in.password" placeholder="Password">
                </div>
                <br>
                <div class="boton">
                <button type="submit">Iniciar Sesion</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import gql from 'graphql-tag'
import jwt_decode from "jwt-decode"

export default {
    name: "UserAuth",

    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processAuthUser: async function(){
            await this.$apollo.mutate({
                mutation: gql`
                    mutation ($authenticateCredentials: CredentialsInput!) {
                        authenticate(credentials: $authenticateCredentials) {
                            refresh
                            access
                        }
                    }`, 
                variables: {
                    authenticateCredentials: this.user_in
                }

            }).then((result) => {

                let data = result.data.authenticate
                data.user_id = jwt_decode(data.access).user_id.toString().padStart(3, "0")

                this.$emit('log-in', data, this.user_in.username)

            }).catch((error) => {
                alert("El usuario y/o contraseña son incorrectos")
            });
        }
    }
}
</script>

<style>
    .auth_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .container_auth_user {
        border: 3px solid  #CDCDCD;
        box-shadow: 0px 0px 15px #91dff7; 
        background-color: white;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .auth_user h2{
        color: #828282;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: normal;
        padding-bottom: 20px;

    }

    .auth_user form{
        width: 50%;
        
    }

    .auth_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;

        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #cbcbcb;
        
    }

    .auth_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #055ebd;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
    }

    .auth_user button:hover{
        color: #E5E7E9;
        background: #0099ff;
        border: 1px solid #283747;
        
    }
    .nombreUsuario, .contraseñaUsuario, .boton{
        padding-bottom: 8px;
    }
</style>