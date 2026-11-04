<template>

    <ul>
        <li v-for="book in books">
            {{ book.title }} by {{ book.author }}
        </li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            books: [
                {
                    "title": "Imperalismo a fase final do Capitalismo",
                    "author": "Vladimir I. Lenin"
                },
                {
                    "title": "O Ministro Chê Guevara. Testemunha de um colaborador",
                    "author": "Tirso W. Saenz"
                }
            ]
        }
    }
}
</script>

<style></style>