var app = new Vue({
  el: '#app',
  data: {
    tasks: this.tasks
  },
  methods: {
    createTask: function(){
      this.$http.post('/tasks', {task: {body: "test6", priority: 10, done: false}})
        .then(function(res){
          this.tasks.push(res.body);
        });
    }
  },
  created: function(){
    this.$http.get('/tasks.json')
      .then(function(res){
        this.tasks = res.data;
      });
  }
})