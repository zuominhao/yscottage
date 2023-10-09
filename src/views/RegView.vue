<template>
    <div class="register-form">
        <h2>注册</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="formData1.username" required>
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="formData1.password" required>
            </div>
            <div class="form-group">
                <label for="confirmPassword">确认密码:</label>
                <input type="password" id="confirmPassword" v-model="formData1.confirmPassword" required>
            </div>
            <button type="submit">注册</button>
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
                confirmPassword: ''
            }
        };
    },
    methods: {
        register() {
            //执行注册方法
            let url = "account/users/reg"
            console.log('Form submitted with data:', this.formData1);
            if(this.formData1.password!=this.formData1.confirmPassword){
                alert("两次密码输入不一致！！！")
                return;
            }
            let formData=this.formData1;
            this.axios.post(url, formData).then((response) => {
                let JsonResult=response.data;
                if(JsonResult.state=="ok"){
                    console.log("注册成功："+JsonResult);
                    alert("注册成功！");
                    router.push('/login');
                }else {
                    alert("用户名已存在！")
                }
            }).catch(error => {
                // 处理错误响应
                console.error('请求失败!!!：', error);
                alert("遇到未知问题，请重试！！！")
            });
        }
    }
};
</script>

<style scoped>
.register-form {
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