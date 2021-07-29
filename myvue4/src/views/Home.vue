<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button class="signout" @click="signOut">ログアウト</button>

    <p>{{}}さんようこそ！</p>
    <h1>ユーザ一覧</h1>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      // name: firebase.auth().currentUser.this.user.name,
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signin");
        });
    },
  },
  computed: {},
};
</script>

<style scoped>
.signout {
  color: rgb(32, 130, 155);
  border: rgb(32, 130, 155) solid 2px;
  text-decoration: none;
  border-radius: 7px;
  margin-top: 10px;
  padding: 9px;
  font-weight: bold;
  background: white;
  position: absolute;
  top: 20px;
  right: 60px;
}

:hover.signout {
  background: rgb(68, 163, 187);
  transition: 0.3s;
  color: aliceblue;
}
</style>
