<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;">
        <v-sheet width="400" class="mx-auto" >
            <v-img
                src="assets/logo/ica.png"
                height="150px"
                ></v-img>
                <!-- <p>{{ $store.state.user.email }}</p> -->
            <h2 class="d-flex align-center">Sign in</h2>
            <v-form fast-fail @submit.prevent="login">
                <v-text-field variant="outlined" v-model="username" label="User Name"></v-text-field>

                <v-text-field variant="outlined" v-model="password" label="password"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

                <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
</template>
<script>
import { AxiosError, SharedAuthService } from '@/services'
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            const credentials ={
                UserName:this.username,
                Password:this.password
            }
        await SharedAuthService.SignIn(credentials).then(response => {
            
                if(response.data.token) {
                    localStorage.setItem('user-token', JSON.stringify(response.data.token));
                    localStorage.setItem('user-email', JSON.stringify(response.data.user.email));
                    localStorage.setItem('user-role', JSON.stringify(response.data.user.userRole.userRoleName));
                    // this.$store.dispatch('[user]',response.data.user)
                    this.$store.commit('setUser',response.data.user)
                    this.$router.push({name:'home'})
                    this.$router.go()
                    
                }
      
        }).catch(error => {
            if (error instanceof AxiosError) {
            if (error.code === 422) {
                this.$refs.form.setErrors(error.message)
            }
            }
            
        })
        },
    },
}
</script>
<style scoped>
</style>