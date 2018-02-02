/**
 * @description 数据列表组件
 * */
(function(V, name,_) {
	var temlate_list = 
			   '<ul id="dataList" class="mui-table-view">'+
				'<li class="mui-table-view-cell mui-media" v-for="item in data">'+
					'<a @tap="open_detail(item.id)" class="mui-navigate-right">'+
						'<div class="mui-pull-left mui-col-sm-8 left">'+
		                	'<span class="doctors">{{item.docName}}</span><span class="hospitals">{{item.hosName}}</span>'+
		                	'<span class="describe">地址：{{item.address}}</span>'+
		                	'<span class="time">{{item.dateline}}</span>'+
		               '</div>'+
		               '<div class="mui-pull-right mui-col-sm-4 right mui-text-right">'+
		                	'<span class="state color_ff0">{{item.state}}</span>'+
		                	'<span class="cancel-order-btn"><p class="mui-pull-right cancelBtn">取消</p>'+
		                	'<p class="mui-pull-right cancel"></p></span>'+
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
			},toCancel:function(oid){
				_.confirm('確定要取消嗎？', '<div class="btn-title">提示</div>',['否', '是'], function(e) {
					if(e.index == 1){
						u.mypost("user_center/orderCancel",{privateToken:window.getItem("privateToken"),oid:oid,orderType:3},true,function(data){
							if(data.code == 0){
								_.toast("取消成功");
							}
						},myerror);
					}
				},'div');
			},toPay:function(oid,price){
				var ex1 = {
					type:6,
					order_type:"預約挂號定金",
					orderId:oid,
					fee:price
				}
		      	window.openView('../doctor/pay.html',ex1);
			}
		}
	})
}(Vue, 'app-list-appoint',mui))