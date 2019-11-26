<template>
    <header class="myhead">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <section class="myhead__goback">
            <img src="../../assets/images/common/left.png" alt="">
        </section>
        <router-link to="/userInfo" class="myhead__login">
            <span class="myhead__login__span">登陆|注册</span>
        </router-link>
        <section class="myhead__title">
            <span>外卖大神</span>
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
.myhead {
    @include width-height(100%,2.95rem);
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    background-color: $blue;
    &__goback{
        @include align-center;
    }
    &__login {
        right: 0.6rem;
        @include size-color(1rem, #fff);
        @include align-center;
        text-decoration: none;
        &__span {
            color: white;
        }
    }
    &__title {
        @include center;
        width: 50%;
        color: #ffffff;
        text-align: center;
    }
}
</style>