/**
 * @description 疫苗預約列表组件
 * */
(function(V, name,_) {
	var temlate_list = 
			   '<ul id="dataList" class="mui-table-view">'+
				'<li class="mui-table-view-cell mui-media" v-for="item in data">'+
					'<a @tap="open_detail(item)" class="mui-navigate-right">'+
	                	'<p class="doctors mui-ellipsis-2">{{item.packageTitle}}</p>'+
	                	'<p class="describe font-size-12">就诊人：{{item.contacts}}<span class="state mui-pull-right">{{item.status}}</span></p>'+
	                	'<p class="describe font-size-12">預約时间 :  {{item.appointTime}}</p>'+
	                	'<p class="describe font-size-12 mui-ellipsis">诊所地址：{{item.hosAddr}}</p>'+
	                	'<p class="describe font-size-12">备注 :  {{item.userRemark}}</p>'+
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
			open_detail: function(item) {
				window.openView('page_vaccinumAppoint_detail.html',{
					oid:item.oid,
					vaccinumName:item.vaccinumName,
					remainAmount:item.remainAmount,
					thumbnail:item.thumbnail,
					status:item.status,
					appointTime:item.appointTime,
					hosAddr:item.hosAddr,
					userRemark:item.userRemark,
					contacts:item.contacts,
					appointTel:item.appointTel
				});
			}
		}
	})
}(Vue, 'app-list-vappoint',mui))