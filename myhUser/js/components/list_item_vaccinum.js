/**
 * @description 数据列表组件
 * */
(function(V, name,_) {
	var temlate_list = 
			   '<ul id="dataList" class="mui-table-view">'+
				'<li class="mui-table-view-cell mui-media" v-for="item in data">'+
					'<a @tap="open_detail(item)" class="mui-navigate-right">'+
						'<img class="mui-media-object mui-pull-left" v-lazy="item.cover">'+
						'<div class="mui-media-body"><div class="mui-ellipsis packageTitle">{{item.packageTitle}}</div>'+
						'<p><span class="price">¥{{item.price}}<span class="state mui-pull-right">{{item.status}}</span></p></div>'+
					'</a>'+
					'<div class="btns" v-if="item.class_status">'+
						'<button @tap="toCancel(item.oid)" class="mui-btn cancel">取消</button>'+
						'<button @tap="toPay(item.oid,item.price)" class="mui-btn but">支付</button>'+
					'</div>'+
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
			open_detail: function(item) {
				window.openView('buy_record_detail.html',{
					src:item.cover,
					userArr:item.arrUser,
					packageTitle:item.packageTitle,
					price:item.price,
					state:item.status
				});
			},toCancel:function(oid){
				_.confirm('確定要取消嗎？', '<div class="btn-title">提示</div>',['否', '是'], function(e) {
					if(e.index == 1){
						u.mypost("user_center/orderCancel",{privateToken:window.getItem("privateToken"),oid:oid,orderType:4},true,function(data){
							if(data.code == 0){
								_.toast("取消成功");
							}
						},myerror);
					}
				},'div');
			},toPay:function(oid,price){
				var ex1 = {
					type:2,
					order_type:"疫苗接種費用",
					orderId:oid,
					fee:price
				}
		      	window.openView('../doctor/pay.html',ex1);
			}
		}
	})
}(Vue, 'app-list-vaccinum',mui))