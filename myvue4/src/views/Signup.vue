
<template>
  <div class="signup">
    
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>新規登録画面</h1>
    <table>
      <tr>
        <td>ユーザー名</td>
        <td><input type="text" placeholder="userName" v-model='userName'></td>
      </tr>
      <tr>
        <td>メールアドレス</td>
        <td><input type="text" placeholder="E-mail" v-model='email'></td>
      </tr>
      <tr>
        <td>パスワード</td>
        <td><input type="text" placeholder="Password" v-model='password'></td>
      </tr>  
    </table>

    <button @click="signUp">新規登録</button>
    <router-link class="link-signin" to="/signin">ログインはこちらから</router-link>

  

  </div>
</template>


<script>
  import firebase from 'firebase'
  
export default{
  name:'Signup',
  data(){
    return{
      userName:'',
      email:'',
      password:''
    }
  },
  methods:{
    signUp:function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(
        
        )
      .catch(
        )
    }
  }
}

</script>


<style scoped>
.signup{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
</style>