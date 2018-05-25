// //参照mockjs的文档，进行操作
// // 配置 Mock 路径
// require.config({
//     paths: {
//         mock: 'http://mockjs.com/dist/mock'
//     }
// })
// // 加载 Mock
// require(['mock'], function(Mock){
//     // 使用 Mock
//     var data = Mock.mock({
//         'list|1-10': [{
//             'id|+1': 1
//         }]
//     })
//     // 输出结果
//     document.body.innerHTML +=
//         '<pre>' +
//         JSON.stringify(data, null, 4) +
//         '</pre>'
// })
//引入mockjs
import api from "../api"
console.log("api.config.isMocked:", api.config.isMocked);

if(api.config.isMocked){
	const Mock = require('mockjs');
	let mockObjs = [
		//get
		{//第一个模拟请求
			url:'/api/data',
			type:"get",
			body:{},
			result:{data: ['a1','b1']}
		},{//第二个模拟请求
			url:'/api/data2',
			type:"get",
			body:{"a":1,"b":2},
			result:{data: ['a2','b2']}
		},
		//这种情况还应付不了
		// {//第三个模拟请求
		// 	url:'/api/data3',
		// 	type:"get",
		// 	body:{"a":1,"b":{b1:2,b2:3}},
		// 	result:{data: ['a3','b3']}
		// },

		//post json
		{//第四个模拟请求
			url:'/api/data4',
			type:"post",
			body:{},
			result:{data: ['a4','b4']}
		},{//第五个模拟请求
			url:'/api/data5',
			type:"post",
			body:{"a":1,"b":2},
			result:{data: ['a5','b5']}
		},{//第六个模拟请求
			url:'/api/data6',
			type:"post",
			body:{"a":1,"b":{b1:2,b2:3}},
			result:{data: ['a6','b6']}
		},]

		Mock.mock('/api/getContact','get',{
			"contact|4-5":[{
				'id|+1':1,
				'imgUrl':'static/images/pic.png',
				'status|1':['1','2'],
				'name':'@cname',
				'phone|1':['12345678900','23456789011','34567890122'],
			}]
		});

		Mock.mock('/api/getCompany','get',{
			"company|4-5":[{
				'id|+1':1,
				'imgUrl':'static/images/pic.png',
				'status|1':['1','2'],
				'name':'@cname',
				'phone|1':['12345678900','23456789011','34567890122'],
			}]
		});
	//使用mockjs模拟数据
	for(let i = 0; i < mockObjs.length; i++){
		let item = mockObjs[i];
		let url = item.url;
		let type = item.type;
		let body = item.body;
		let result = item.result;

		//get: req-queryString
		if(type=="get" && body && JSON.stringify(body) != "{}"){
			if(url.indexOf("?")>-1){
				url += "&";
			}
			else{
				url += "?";
			}
			let j = 0;
			for(let attr in body){
				if(j > 0) url += "&";
				url += (attr+"="+ encodeURIComponent(JSON.stringify(body[attr])));
				j++;
			}
		}
		Mock.mock(url, (req, res) => {;
			//console.log("req:", req);
			// //get: req-queryString
			// for(let attr in body){
			// 	if(req.url.indexOf(attr+"=")==-1){
			// 		return {code:400, success:false, message:"缺乏参数"+attr};
			// 	}
			// }
			
			//post: req-body(没有做嵌套检测)
			if(type=="post" && body){
				if(!req.body) return {code:400, success:false, message:"请传入post参数"};
				let reqBody = JSON.parse(req.body);
				for(let attr in body){
					if(!reqBody[attr]){
						return {code:400, success:false, message:"缺乏参数"+attr};
					}
				}
			}
		    //在此可做是否可做参数校验
		    
		    return result;
		});
	}
}