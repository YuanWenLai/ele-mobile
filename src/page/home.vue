<template>
    <div>
        <head-top>
            <span slot="logo">test title</span>
        </head-top>
    </div>
</template>

<script>
    import HeadTop from '../components/header/myhead.vue'
	export default {
		name: "home",
        components:{
			HeadTop
        }
	}
</script>

<style scoped>

</style>