/**
 *@description 轮播图插件 
 * */
(function(V, name, _, w) {
	var template = '<div class="mui-slider"><div class="mui-slider-group mui-slider-loop">' +
		'<div class="mui-slider-item mui-slider-item-duplicate">' +
		'<a href="#"><img :src="carouseData[(carouseData.length || 1)-1].img"></a></div>' +
		'<div @tap="tap(o)" v-for="(o,index) of carouseData" class="mui-slider-item">' +
		'<a href="#"><img :src="o.img"></a></div><div class="mui-slider-item mui-slider-item-duplicate">' +
		'<a href="#"><img :src="carouseData[0].img"></a></div></div><div class="mui-slider-indicator">' +
		'<div class="mui-indicator" v-for="(o,index) in carouseData" :class=\'{"mui-active":index===0}\'></div>' +
		'</div></div>';
	V.component(name, {
		template: template,
		props: ['carouse-data'],
		data: function() {
			return {
				data: [], //数据源
			}
		},
		mounted: function() {
			_('.mui-slider').slider({
				interval: 3000
			});
		},
		methods: {
			tap: function(item) {
				//触发子窗口变更新闻詳情
				mui.fire(info_detail, 'get_detail', {
					nid: item.nid,
					title: item.title,
					thumbnail: item.thumbnail
				});
				//更改詳情页原生导航条信息
				titleNView.titleText = item.title;
				info_detail.setStyle({
					"titleNView": titleNView
				});
				setTimeout(function() {
					info_detail.show("slide-in-right", 300);
				}, 150);
			}
		}
	})
}(Vue, 'app-carousel', mui, window))