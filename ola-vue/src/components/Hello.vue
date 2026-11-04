<template> 
    <h1>Hello {{ name }}</h1>
    <button @click="send">Enviar</button>
    <!-- o nome para {{ }} é interpolação -->
</template>
<script>
export default{
    props: {
        name: String
    },
    methods: {
        send(){
            this.$emit('sendEvent', 'Olá ' + this.name)
        }
    }
}
</script>

<style>
 h1{
    color: purple;
 }
</style>