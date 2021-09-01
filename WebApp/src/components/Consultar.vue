<template>
  <div id="Consultar" class="mostrar">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Documento</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Edad</th>
          <th scope="col">Sexo</th>
          <th scope="col">Cuarto</th>
          <th scope="col">Sala</th>
          <th scope="col">Ocupacion</th>
          <th scope="col">Motivo Consulta</th>
          <th scope="col">Cardiovascular</th>
          <th scope="col">Pulmonar</th>
          <th scope="col">Digestivo</th>
          <th scope="col">Diabetes</th>
          <th scope="col">Renal</th>
          <th scope="col">Quirurgico</th>
          <th scope="col">Transfusion</th>
          <th scope="col">Medicamentos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="consulta in registroPacientes" :key="consulta.id">
        <td>{{ consulta.documento }}</td>
        <td>{{ consulta.nombre }}</td>
        <td>{{ consulta.apellido }}</td>
        <td>{{ consulta.edad }}</td>
        <td>{{ consulta.sexo }}</td>
        <td>{{ consulta.cuarto }}</td>
        <td>{{ consulta.sala }}</td>
        <td>{{ consulta.ocupacion }}</td>
        <td>{{ consulta.motivoConsulta }}</td>
        <td>{{consulta.cardiovascular === "" || consulta.cardiovascular === "no" ? "no" : "si" }} </td>
        <td>
          {{
            consulta.pulmonar === "" || consulta.pulmonar === "no" ? "no" : "si"
          }}
        </td>
        <td>
          {{
            consulta.digestivo === "" || consulta.digestivo === "no"
              ? "no"
              : "si"
          }}
        </td>
        <td>{{consulta.diabetes === "" || consulta.diabetes === "no" ? "no" : "si" }} </td>
        <td>{{consulta.renal === "" || consulta.renal === "no" ? "no" : "si" }} </td>
        <td>{{consulta.quirurgico === "" || consulta.quirurgico === "no" ? "no" : "si" }} </td>
        <td>{{consulta.transfusion === "" || consulta.transfusion === "no" ? "no" : "si" }} </td>
        <td>{{ consulta.medicamentos }}</td>
      </tr>
      </tbody>
    </table>

    
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Consultar",

  data: function() {
    return {
      username: "none",
      registroPacientes: [],
    };
  },

  created: function() {
    this.username = this.$route.params.username;
  },

  apollo: {
    registroPacientes: {
      query: gql`
        query($registroPacientesMedicoId: String!) {
          registroPacientes(medicoId: $registroPacientesMedicoId) {
            documento
            nombre
            apellido
            edad
            sexo
            cuarto
            sala
            ocupacion
            motivoConsulta
            cardiovascular
            pulmonar
            digestivo
            diabetes
            renal
            quirurgico
            transfusion
            medicamentos
          }
        }
      `,
      variables() {
        return {
          registroPacientesMedicoId: localStorage.getItem("user_id"),
        };
      },
    },
  },
};
</script>

<style>
.mostrar {
  padding-top: 150px;
  padding-bottom: 150px;
}
</style>
