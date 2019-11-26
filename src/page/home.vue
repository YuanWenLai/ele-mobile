<template>
    <div class="home">
        <head-top>
            <!--<span slot="logo">test title</span>-->
        </head-top>
        <nav class="home__city">
            <div class="home__city__tip">
                <span>当前定位城市</span>
                <span>定位不准确，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/' + guessCityId" class="home__city__guess">
                <span>{{ guessCity }}</span>
                <img src="../assets/images/common/right.png" alt="">
            </router-link>
        </nav>
        <section class="home__hot">
            <h4 class="home__hot__title">热门城市</h4>
            <ul class="home__hot__list clear">
                <router-link tag="li" v-for="(item,index) in hotCityList" :to="'/city/' + item.id" :key="index">
                    {{ item.name }}
                </router-link>
            </ul>
        </section>
    </div>
</template>

<script>
    import { getDefaultCity } from "../api/api";
    import HeadTop from '../components/header/myhead.vue'
	export default {
		name: "home",
        components:{
			HeadTop
        },
        data() {
			return {
				guessCity: '',  //当前城市
                guessCityId: '',
                hotCityList: [],
                groupCity: {},
            }
        },
        methods: {
			async getCityData() {
				let guessData = await getDefaultCity('guess')
				let hotCityData = await getDefaultCity('hot')
				let groupCityData = await getDefaultCity('group')
                this.guessCity = guessData.data.name
                this.guessCityId = guessData.data.id
                this.hotCityList = hotCityData.data
                this.groupCity = groupCityData.data
                console.log(this.groupCity)
            }
        },
        mounted() {
			this.getCityData()
        }
	}
</script>

<style scoped lang="scss">
    @import "../style/mixin";
    .home {
        &__city {
            padding-top: 3rem;
            border-top: 1px solid $bc;
            background-color: #ffffff;
            margin-bottom: .8rem;
            &__tip {
                @include flex-style();
                line-height: 3.2rem;
                padding: 0 0.8rem;
                span:nth-of-type(1) {
                    @include size-color(1.2rem, #666)
                }
                span:nth-of-type(2) {
                    @include size-color(0.95rem, #9f9f9f)
                }
            }
            &__guess {
                @include flex-style();
                align-items: center;
                height: 3rem;
                padding: 0 0.8rem;
                border-top: 2px solid $bc;
                border-bottom: 2px solid $bc;
                @include font(1.4rem, 2.6rem);
                text-decoration: none;
                span {
                    color: $blue;
                }
            }
        }
        &__hot {
            background-color: #ffffff;
            margin-bottom: 1.2rem;
            &__title {
                color: #666666;
            }
            &__list {
                padding: 0;
                margin-left: 0.8rem;
                li {
                    @include width-height(24%, 3rem);
                    @include font(1.2rem, 3rem);
                    border: 0.005rem solid $bc;
                    float: left;
                    text-align: center;
                    color: $blue;
                    list-style: none;
                }
            }
        }
    }
</style>