<template>
    <header id="myhead">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <section class="myhead__goback">
            回退img
        </section>
        <router-link to="/userInfo" class="myhead__login">
            <span class="myhead__login__span">登陆|注册</span>
        </router-link>
        <section class="myhead__title">
            <span>头标题</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
	export default {
		name: "myhead"
	}
</script>

<style scoped lang="scss">
@import "../../style/mixin";
#myhead {
    @include width-height(100%,1.95rem);
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    background-color: $blue;
}
</style>