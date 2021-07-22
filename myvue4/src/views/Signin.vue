<template>
  <div class="form">
   <h1>ログイン画面</h1>
    <table>
      <tr>
        <td>メールアドレス</td>
        <td><input type="text" placeholder="E-mail" v-model='email'></td>
      </tr>
      <tr>
        <td>パスワード</td>
        <td><input type="text" placeholder="Password" v-model='password'></td>
      </tr>  
    </table>

    <button @click="signIn" class="link-signup">ログイン</button>
      <router-link class="link-signin" to="./">新規登録はこちらから</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signin',
  data(){
    return{
      email:'',
      password:''
    }
  },
 methods:{
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(
      )
      .catch(
      )
  }
 }
}
</script>
