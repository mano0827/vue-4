
<template>
  <div class="form">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>新規登録画面</h1>
    <table>
      <tr>
        <td>ユーザー名</td>
        <td><input type="text" placeholder="userName" v-model="name" /></td>
      </tr>
      <tr>
        <td>メールアドレス</td>
        <td><input type="text" placeholder="E-mail" v-model="email" /></td>
      </tr>
      <tr>
        <td>パスワード</td>
        <td><input type="text" placeholder="Password" v-model="password" /></td>
      </tr>
    </table>

    <button @click="signUp" class="link-signup">新規登録</button>
    <router-link class="link-signin" to="/signin"
      >ログインはこちらから</router-link
    >
  </div>
</template>


<script>
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>


<style>
.link-signup {
  color: rgb(32, 130, 155);
  border: rgb(32, 130, 155) solid 2px;
  text-decoration: none;
  border-radius: 7px;
  margin-top: 10px;
  padding: 9px;
  font-weight: bold;
  background: white;
}

:hover.link-signup {
  background: rgb(68, 163, 187);
  transition: 0.3s;
  color: aliceblue;
}

.link-signin {
  color: rgb(32, 130, 155);
  text-decoration: none;
}

:hover.link-signin {
  text-decoration: underline;
}

.form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>