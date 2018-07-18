/**
 * @description 数据列表组件
 * */
(function(V, name, _) {
	var temlate_list = '<ul id="dataList" class="mui-table-view">' +
		'<li class="mui-table-view-cell" v-for="item in data" @tap="openDetail(item)">' +
		'<div class="author font-size-12">' +
		'<div class="left">' +
		'<img class="author-avatar" v-lazy="item.avatar">' +
		'<div class="author-name">{{item.postNickname}}</div>' +
		'</div>' +
		'<div class="right">{{item.postDate}}</div>' +
		'</div>' +
		'<div class="desc font-size-14">{{item.postTitle}}<div class="desc-icon">' +
		'<div class="desc-item">' +
		'<i class="mui-icon-extra mui-icon-extra-heart"></i>' +
		'<span class="number">{{item.clickCount}}</span>' +
		'</div>' +
		'<div class="desc-item">' +
		'<i class="mui-icon mui-icon-chat"></i>' +
		'<span class="number">{{item.commentCount}}</span>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</li>' +
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
			openDetail: function(item) {
				window.openView('detail.html', {
					p_id: item.id,
					postTitle: item.postTitle,
					postNickname: item.postNickname,
					postDate: item.postDate,
					content: item.content,
					clickCount: item.clickCount,
					commentCount: item.commentCount,
					avatar: item.avatar
				});
			}
		}
	})
}(Vue, 'app-list', mui))