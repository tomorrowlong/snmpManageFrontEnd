<template>
  <div id="login" class="my-bg-3 my-full-height is-desktop">
    <div class="my-blue my-pad-top-6 is-size-2">
      欢迎使用网络管理v1
    </div>
    <div class="columns  my-pad-top-4">
      <div class="column is-4 is-offset-4  my-1-2-trans">

        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input my-trans my-blue" v-model="phone" type="tel" placeholder="tel">
            <span class="icon is-small is-left my-blue">
                  <i class="fas fa-phone"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input class="input my-trans my-blue" v-model="password" type="password" placeholder="Password">
            <span class="icon  my-blue is-small is-left">
                  <i class="fas fa-lock"></i>
              </span>
          </p>
        </div>

        <div class="field">
          <div class="columns">
            <div class="control column has-text-centered">
              <button class="button is-fullwidth  my-blue my-trans" @click="signIn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../api/api'
  export default {
        name: "Login",
        data(){
          return{
            isSignedin: false,
            phone: '',
            password: '',
            power:''
          }
        },
        methods: {
          test: function () {
            this.$toast('test!')
          },
          signIn: function () {
            let para = {
              phoneNumber:this.phone,
              password:this.password
            }
            if (this.isSignedin) return
            if (this.phone.length === 0 || this.password.length === 0) {
              this.$toast('字段不能为空')
              return
            }
            this.login(para).then((res) => {
              this.power = res.data.data.power;
              if(this.power==0){
                this.$toast('手机号错误')
                this.isSignedin = false
              }
              else if(this.power==1){
                this.$toast('权限为普通权限')
                this.isSignedin = true
                this.$router.push('/relation')
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
