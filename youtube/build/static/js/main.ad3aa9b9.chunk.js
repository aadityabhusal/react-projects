(this["webpackJsonpyoutube-player"]=this["webpackJsonpyoutube-player"]||[]).push([[0],{51:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),l=a(29),o=a.n(l),s=a(42),u=a(20),m=a(21),d=a(27),p=a(26),h=a(111),v=a(22),b=a(106),f=a(112),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a=e.state.search;e.props.onFormSubmit(a)},e.state={search:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){return i.a.createElement(b.a,{elevation:6,style:{padding:"25px"}},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(f.a,{fullWidth:!0,label:"Search Here...",onChange:this.handleChange})))}}]),a}(n.Component),g=a(110),y=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");console.log(t.id.videoId);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{elevation:6,style:{height:"70%"}},i.a.createElement("iframe",{frameBorder:0,height:"100%",width:"100%",title:"Video Player",src:a,allowFullScreen:!0})),i.a.createElement(b.a,{elevation:6,style:{padding:"15px"}},i.a.createElement(g.a,{variant:"h4"},t.snippet.title+" - "+t.snippet.channelTitle),i.a.createElement(g.a,{variant:"subtitle1"},t.snippet.channelTitle),i.a.createElement(g.a,{variant:"subtitle2"},t.snippet.description)))},S=function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(b.a,{style:{display:"flex",cursor:"pointer",alignItems:"center"},onClick:function(){return a(t)}},i.a.createElement("img",{style:{marginRight:"20px"},alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),i.a.createElement(g.a,{variant:"subtitle1"},t.snippet.title)))},w=function(e){var t=e.videoList,a=e.onVideoSelect;return i.a.createElement(h.a,{container:!0,spacing:10},t.map((function(e,t){return i.a.createElement(S,{key:t,onVideoSelect:a,video:e})})))},x=a(47),V=a.n(x).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.get("search",{params:{part:"snippet",maxResults:5,type:"video",key:"AIzaSyCQn0SKCGfTeQz_J9AJsGcgrGZ2VTprsaM",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit("")}},{key:"render",value:function(){return i.a.createElement(h.a,{justify:"center",container:!0,spacing:10},i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(h.a,{container:!0,spacing:10},i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(E,{onFormSubmit:this.handleSubmit})),i.a.createElement(h.a,{item:!0,xs:8},i.a.createElement(y,{video:this.state.selectedVideo})),i.a.createElement(h.a,{item:!0,xs:4},i.a.createElement(w,{videoList:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),a}(n.Component);c.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.ad3aa9b9.chunk.js.map