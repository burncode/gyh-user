/**
 * @description 数据列表组件
 * */
(function(V, name,_) {
	var temlate_list = 
			   '<ul id="dataList" class="mui-table-view">'+
				'<li class="mui-table-view-cell mui-media" v-for="item in data">'+
					'<img class="mui-media-object mui-pull-left" v-lazy="imgServer + item.avatar">'+
					'<div class="mui-media-body" @tap="open_detail(item.uid)">{{item.nickname}}<span class="titles"> {{item.docLevel}}</span>'+
						'<p class="doc-img"><i class="icon-doctor-hos"></i> {{item.hospitalName}} ( {{item.area}} )</p>'+
						'<p class="doc-img"><i class="icon-doctor-type"></i> {{item.officeName}}</p>'+
						'<p class="titles">預計等待時間：{{item.estimatedTime}}分鐘<span class="mui-pull-right">排隊人數: {{item.lineCount}}人</span></p>'+
					'</div>';
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
			open_detail: function(docId) {
				window.openView('doctor_detail.html',{
					docId:docId
				});
			}
		}
	})
}(Vue, 'app-list-doctors',mui))