<template>
    <div class="login-form">
        <h2>登录</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="formData1.username" required>
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="formData1.password" required>
            </div>
            <button type="submit">登录</button>
        </form>
    </div>
</template>

<script>
import router from "@/router";

export default {
    data() {
        return {
            formData1: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        login() {
            let url = "users/login"
            console.log('表单提交的数据》》》', this.formData1);
            let formData = this.formData1;
            this.axios.post(url, formData)
                .then((response) => {
                    let JsonResult = response.data;
                    if (JsonResult.state == "ok") {
                        console.log("成功响应");
                        alert("登录成功！");
                        let loginResult = JsonResult.data;
                        localStorage.setItem('localJwt', loginResult.token);
                        localStorage.setItem('currentUserId', loginResult.id);
                        localStorage.setItem('currentUserName', loginResult.username);
                        router.push('/');
                    } else {
                        console.log("错误响应: ",JsonResult);
                        alert(JsonResult.message)
                    }
                }).catch(error => {
                console.error('请求失败!!!：', error);
            });
        }
    }
};
</script>

<style scoped>
.login-form {
    max-width: 300px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 5px;
}
</style>
