//使用cdn引入时需要实例化一个vue对象
new Vue({
	el:"#vue-app",
	data:{
		name:"pig",
		age:20,
		websit:"http://www.baidu.com"
	},
	methods:{
		greet:function(){
			return "123456";
		}
	}
})
/*
 * el:element需要获取的元素，一定是html中的根容器的元素;
 * data:数据的存储
 * methods:定义方法
 * 在实力化中的this指向当前的对象如data中的属性直接this.name
 *
 */