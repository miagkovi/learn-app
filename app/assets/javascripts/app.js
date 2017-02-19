var app = new Vue({
  el: '#app',
  data: {
    tasks: this.tasks
  },
  created: function(){
    this.$http.get('/tasks.json')
      .then(function(res){
        this.tasks = res.data;
    })
  }
})