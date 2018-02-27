/**
 * @description 预约挂号组件
 * */
(function(V, name,_) {
	var temlate_list = 
			   '<ul id="dataList" class="mui-table-view">'+
				'<li class="mui-table-view-cell mui-media" v-for="item in data">'+
					'<a @tap="open_detail(item.id)" class="mui-navigate-right">'+
						'<div class="mui-pull-left mui-col-sm-8">'+
		                	'<div class="doctors">{{item.docName}}</div><div class="hospitals font-size-12">{{item.hosName}}</div>'+
		                	'<div class="describe font-size-12">地址：{{item.address}}</div>'+
		                	'<div class="describe font-size-12">时间 :  {{item.dateline}}</div>'+
		               '</div>'+
		               '<div class="mui-pull-right mui-col-sm-4 right mui-text-right">'+
		                	'<span class="main-font-color font-size-12">{{item.status}}</span>'+
		               '</div>'+
	               '</a>'+
				'</li>'+
			'</ul>';

	V.component(name, {
		template: temlate_list,
		props: ['data'],
		data: function() {
			return {
				data: []
			}
		},
		methods: {
			open_detail: function(orderId) {
				window.openView('order_detail.html',{
					orderId:orderId
				});
			}
		}
	})
}(Vue, 'app-list-appoint',mui))