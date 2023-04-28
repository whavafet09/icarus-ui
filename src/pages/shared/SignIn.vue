<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <h1 class="d-flex align-center justify center">Sign In Icarus</h1>
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
                    localStorage.setItem('userdata', JSON.stringify(response.data));
                }
                console.log(response.data);
                
        }).catch(error => {
            if (error instanceof AxiosError) {
            if (error.code === 422) {
                this.$refs.form.setErrors(error.message)
            }
            }
            this.isBusy = false
        })



            
            // this.$router.push({ path: '/home' })
        }
    },
}
</script>
<style scoped>
</style>