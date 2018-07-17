/**
 * @description 评论数据列表组件
 * */
(function(V, name,_) {
	var comm_temlate_list = 
			   '<ul id="dataList" class="mui-table-view">'+
					'<li class="mui-table-view-cell mui-media" v-for="item in data">'+
						'<div class="mui-media-object mui-pull-left"><img class="mui-media-object" :src="item.avatar">'+
						'<div class="floor font-size-12">{{item.index}}楼</div></div>'+
						'<div class="mui-media-body">'+
							'<p class="font-size-12 font-color-333">{{item.recmdNickname}}<span class="mui-pull-right">{{item.recmdDate}}</span></p>'+
							'<p class="content">{{item.recmdContent}}</p>'+
						'</div>'+
					'</li>'+
				'</ul>';

	V.component(name, {
		template: comm_temlate_list,
		props: ['data'],
		data: function() {
			return {
				data: []
			}
		},methods:{
		}
	})
}(Vue, 'app-list',mui))