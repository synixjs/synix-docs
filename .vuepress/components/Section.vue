<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <h4>{{ description }}</h4>
        <hr>
    </div>
</template>
<script>
export default {
    name : 'Section',
    props : ['title','description'],
}
</script>
<style scoped>
.container{
    max-width: 50%;
    margin: 5px auto;
    text-align: center;
}
</style>

