<template>
    <div id="User">
        <a v-on:click="agregar" class="cursor" style="text-decoration: none; color: black;">
        <div class="card mx-4" style="width: 18rem; margin-top:150px; box-shadow: 15px 15px 15px #91dff7;">
            <img src="../iconos/agregar-archivo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Agregar Registro</h5>
                
                
            </div>
        </div> 
        </a>
        <a v-on:click="consultar" class="cursor" style="text-decoration: none; color: black;">
            <div class="card mx-5" style="width: 18rem; margin-top:150px; box-shadow: 15px 15px 15px #91dff7; ">
                <img src="../iconos/registros-medicos.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Consultar Registro</h5>
                </div>
            </div>  
        </a>
    </div>
</template>

<script>
    import gql from 'graphql-tag'
    export default {
        name: "User",

        data:function(){
            return {
                username: "none",
                is_auth: false
            }
        },

        created: function(){
            this.username = this.$route.params.username
            this.updateAccessToken();
        },

        methods:{

    updateAccessToken: async function(){
      if(localStorage.getItem('refresh_token')==null){
        this.$router.push({name: "user_auth"})
        this.is_auth = false
        return;
      }

      await this.$apollo.mutate({
        mutation: gql`
          mutation ($refreshTokenRefresh: String!) {
            refreshToken(refresh: $refreshTokenRefresh) {
              access
            }
          }`
        , 
        variables: {
          refreshTokenRefresh: localStorage.getItem('refresh_token')
        }
      }).then((result) => {
        localStorage.setItem('access_token', result.data.refreshToken.access)
        this.is_auth = true
      }).catch((error) => {
        alert("Su sesión expiró, vuelva a iniciar sesión.")
        this.$router.push({name: "user_auth"})
        this.is_auth = false
        localStorage.clear();
      });
    },

    logIn: async function(data, username){
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
      localStorage.setItem('user_id', data.user_id)
      localStorage.setItem('current_username', username)

      await this.updateAccessToken();
      if(this.is_auth) this.init();
    },

    init: function(){
      this.$router.push({name: "user", params:{ username: localStorage.getItem("current_username") }})
    },

    agregar: function () {
      this.$router.push({
        name: "agregar",
        params: { username: localStorage.getItem("current_username") },
      });
    },

    consultar: function () {
      this.$router.push({
        name: "consultar",
        params: { username: localStorage.getItem("current_username") },
      });
      
    },

    logOut: async function(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('current_username')

      await this.updateAccessToken();
    }   
  }
    }
</script>


<style>
    #User{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;    
        align-items: center;
    }

    #User h2{
        font-size: 50px;
        color: #283747;
    }

    #User span{
        color: crimson;
        font-weight: bold;
    }
    .cursor:hover{
        cursor: pointer;
    }

</style>