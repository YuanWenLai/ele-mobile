<template>
    <div id="text">
        {{ text }}
    <span>25454</span>
        <img src="./assets/images/book.png" alt="">
    </div>
</template>

<script>
	export default {
		name: "app",
        data() {
			return {
				text: '123'
            }
        }
	}
</script>

<style scoped lang="scss">
#text {
    background: red;
    span {
        color: green;
    }
}
</style>