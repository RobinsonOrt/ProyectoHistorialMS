<template>
    <div class="formulario px-5">
        <form name="registrarForm" class="row g-3" v-on:submit.prevent="guardarRegistro">
            
            <div class="col-md-2">
                <label for="inputEmail4" class="form-label">Cedula</label>
                <input type="text" class="form-control g-col-3" v-model="createRegistroRegistrar.regNum"/>
            </div>
            <div class="col-md-2">
                <label for="inputEmail4" class="form-label">Confirmar Cedula</label>
                <input type="text" class="form-control g-col-3" v-model="createRegistroRegistrar.documento"/>
            </div>

            <div class="row">
                <div class="col-5">
                    <label for="inputAddress" class="form-label">Nombre</label>
                    <input type="text" class="form-control" v-model="createRegistroRegistrar.nombre"/>
                </div>
                <div class="col-5">
                    <label for="inputAddress" class="form-label">Apellidos</label>
                    <input type="text" class="form-control" v-model="createRegistroRegistrar.apellido"/>
                </div>
                <div class="col-2">
                    <label for="inputAddress" class="form-label">Edad</label>
                    <input type="number" class="form-control" v-model="createRegistroRegistrar.edad"/>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Sexo</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Masculino" checked />
                        <label class="form-check-label" for="inlineRadio1">Masculino</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Femenino" />
                        <label class="form-check-label" for="inlineRadio2">Femenino</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Otro" />
                        <label class="form-check-label" for="inlineRadio3">Otro</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Cuarto</label>
                    <input type="number" class="form-control g-col-3" id="inputEmail4" v-model="createRegistroRegistrar.cuarto"/>
                </div>
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Sala</label>
                    <input type="number" class="form-control g-col-3" id="inputEmail4" v-model="createRegistroRegistrar.sala"/>
                </div>
                <div class="col-5">
                    <label for="inputAddress" class="form-label">Ocupacion</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="createRegistroRegistrar.ocupacion"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Motivo Consulta</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="createRegistroRegistrar.motivoConsulta"/>
                </div>
            </div>
            <div class="grid row pt-3">
                <div class="g-col-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.cardiovascular" value="no" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Cardiovascular</label>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.pulmonar" value="no" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Pulmonar</label>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.digestivo" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Digestivo</label>
                    </div>
                </div>
                <div class="g-col-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.diabetes" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Diabetes</label>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.renal" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Renal</label>
                    </div>
                </div>
                <div class="g-col-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.quirurgico" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Quirurgico</label>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="createRegistroRegistrar.transfusion" true-value="si" false-value="no" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Transfusion</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Medicamentos</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="createRegistroRegistrar.medicamentos"/>
            </div>
            </div>
                <div class="col-4">
                <button class="btn btn-primary" type="submit">Guardar Registro</button>
            </div>
        </form>
    </div>
</template>

<script>
    import gql from "graphql-tag";

    export default {
    name: "Agregar",

    data: function () {
        console.log("Hola")
        return {
        createRegistroRegistrar: {
            medicoId: localStorage.getItem("user_id"),
            regNum: "",
            documento: "",
            nombre: "",
            apellido: "",
            edad: "",
            sexo: "",
            cuarto: "",
            sala: "",
            ocupacion: "",
            motivoConsulta: "",
            cardiovascular: "",
            pulmonar: "",
            digestivo: "",
            diabetes: "",
            renal: "",
            quirurgico: "",
            transfusion: "",
            medicamentos: "",
        },
        };
    },

    methods: {
        guardarRegistro: async function () {
            this.createRegistroRegistrar.sexo= document.querySelector('input[name="inlineRadioOptions"]:checked').value;
        await this.$apollo
            .mutate({
            mutation: gql`
                mutation ($createRegistroRegistrar: RegistrarInput!) {
                createRegistro(registrar: $createRegistroRegistrar) {
                    documento
                }
                }
            `,
            variables: {
                createRegistroRegistrar: this.createRegistroRegistrar,
            },
            })
            .then((result) => {
            alert("Registro Guardado con exito")
            })
            .catch((error) => {
                alert("Error al guardar");
            });
        },
    },
    };
</script>

<style>
.formulario {
  padding-top: 100px;
  padding-bottom: 100px;
}
.contenedor{
    display: flex;
    justify-content: space-between;
}


</style>
