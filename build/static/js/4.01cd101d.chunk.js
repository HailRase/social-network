(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{226:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),o=n(56),a=(n(0),n(227)),s=n.n(a),i=n(108),c=n(2),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,o=e.children,a=n&&r;return Object(c.jsxs)("div",{className:a?"".concat(s.a.formControl," ").concat(s.a.error):s.a.formControl,children:[o,a&&Object(c.jsx)("span",{className:s.a.errorMessage,children:r})]})},l=function(e){var t=e.input,n=e.meta,a=Object(o.a)(e,["input","meta"]);return Object(c.jsx)(u,{input:t,meta:n,children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({className:s.a.textarea},t),a))})},d=function(e){var t=e.input,n=e.meta,a=Object(o.a)(e,["input","meta"]);return Object(c.jsx)(u,{input:t,meta:n,children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({className:s.a.input},t),a))})},f=function(e,t,n,o,a,s){return Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({name:t,component:o,validate:n,placeholder:e},a),{},{style:{marginBottom:"10px"}})),Object(c.jsx)("div",{children:s})]})}},227:function(e,t,n){e.exports={formControl:"FormsControl_formControl__Bb7au",error:"FormsControl_error__2MOuv",errorMessage:"FormsControl_errorMessage__BRyAo",textarea:"FormsControl_textarea__2njJO"}},229:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r=function(e){return e?void 0:"Field is required!!!"},o=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),o=n(56),a=(n(0),n(6)),s=n(23),i=n(2),c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(s.b)(c)((function(t){var n=t.isAuth,s=Object(o.a)(t,["isAuth"]);return n?Object(i.jsx)(e,Object(r.a)({},s)):Object(i.jsx)(a.a,{to:"/login"})}))}},237:function(e,t,n){"use strict";t.a=n.p+"static/media/user-man.88012ad7.png"},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(61);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},298:function(e,t,n){e.exports={profileContainer:"Profile_profileContainer__3sSvd",profileInfoContainer:"Profile_profileInfoContainer__2NyAN",profilePage:"Profile_profilePage__2WNHV",profilePageServices:"Profile_profilePageServices__2gkkr",friendsPage:"Profile_friendsPage__2GF0P",nameContainer:"Profile_nameContainer__145qp"}},299:function(e,t,n){e.exports={descriptionBlog:"ProfileInfo_descriptionBlog__3EJWo",profileImage:"ProfileInfo_profileImage__Tbbxh",profileInformation:"ProfileInfo_profileInformation__sbWCl",avatar:"ProfileInfo_avatar__lqV8S",imageDownloader:"ProfileInfo_imageDownloader__yP8Bw",informationItem:"ProfileInfo_informationItem__3POUh"}},300:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1eYTx",nameContainer:"MyPosts_nameContainer__16vyO",posts:"MyPosts_posts__2KqxB"}},301:function(e,t,n){e.exports={postContainer:"Post_postContainer__uWPh-"}},302:function(e,t,n){e.exports={addPostFormContainer:"AddPostForm_addPostFormContainer__1rqe6",buttonPosition:"AddPostForm_buttonPosition__O3QWY"}},309:function(e,t,n){"use strict";n.r(t);var r=n(31),o=n(32),a=n(42),s=n(41),i=n(0),c=n.n(i),u=n(298),l=n.n(u),d=n(299),f=n.n(d),j=n(28),p=n(238),b=n(2),m=function(e){var t=Object(i.useState)(e.status),n=Object(p.a)(t,2),r=n[0],o=n[1],a=Object(i.useState)(!1),s=Object(p.a)(a,2),c=s[0],u=s[1];Object(i.useEffect)((function(){o(e.status)}),[e.status]);return Object(b.jsx)(b.Fragment,{children:c?Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onChange:function(e){o(e.currentTarget.value)},onBlur:function(){u(!1),e.updateStatus(r)},value:r,type:"text"})}):Object(b.jsx)("div",{children:Object(b.jsxs)("span",{onDoubleClick:function(){u(!0)},children:[e.status||"-------------"," "]})})})},h=n(237),O=function(e){var t=e.userProfile,n=e.isOwner,r=e.status,o=e.updateStatus,a=e.savePhoto;if(!t)return Object(b.jsx)(j.a,{});return Object(b.jsxs)("div",{className:f.a.descriptionBlog,children:[Object(b.jsxs)("div",{className:f.a.profileImage,children:[Object(b.jsx)("img",{alt:"Avatar",src:t.photos.large||h.a,className:f.a.avatar}),n&&Object(b.jsxs)("label",{className:f.a.imageDownloader,children:["Upload image",Object(b.jsx)("input",{type:"file",onChange:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&a(e.target.files[0])},style:{display:"none"}})]})]}),Object(b.jsxs)("div",{className:f.a.profileInformation,children:[Object(b.jsx)("div",{className:f.a.informationItem,children:Object(b.jsx)("span",{children:t.fullName})}),Object(b.jsx)(m,{status:r,updateStatus:o}),t.lookingForAJob&&Object(b.jsx)("div",{className:f.a.informationItem,children:Object(b.jsx)("span",{children:t.lookingForAJob})}),t.lookingForAJobDescription&&Object(b.jsx)("div",{className:f.a.informationItem,children:Object(b.jsx)("span",{children:t.lookingForAJobDescription})})]})]})},v=n(300),x=n.n(v),P=n(301),_=n.n(P);var g=function(e){return Object(b.jsxs)("div",{className:_.a.postContainer,children:[Object(b.jsx)("img",{src:"https://www.kinonews.ru/insimgs/2018/newsimg/newsimg83415.jpg",alt:""}),e.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["like ",e.likeCount]})})]})},y=n(108),C=n(109),I=n(229),N=n(226),w=n(58),S=n(302),k=n.n(S),A=Object(I.a)(15),F=Object(C.a)({form:"profileAddPostForm"})((function(e){return Object(b.jsxs)("form",{className:k.a.addPostFormContainer,onSubmit:e.handleSubmit,children:[Object(b.jsx)(y.a,{component:N.a,label:"Create new post",name:"newPostText",placeholder:"Enter post text..",validate:[I.b,A],style:{width:"100%"}}),Object(b.jsx)(w.a,{className:k.a.buttonPosition,purple:!0,children:"Add post"})]})})),B=c.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return Object(b.jsx)(g,{message:e.text,likeCount:e.likesCount},e.id)}));return Object(b.jsxs)("div",{className:x.a.postsBlock,children:[Object(b.jsx)("div",{className:x.a.nameContainer,children:Object(b.jsx)("span",{children:"My posts"})}),Object(b.jsx)("div",{children:Object(b.jsx)(F,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}})}),Object(b.jsx)("div",{className:x.a.posts,children:t})]})})),M=n(60),D=n(23),J=Object(D.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(Object(M.a)(t))}}}))(B);var T=function(e){return Object(b.jsx)("div",{className:l.a.profileContainer,children:Object(b.jsxs)("div",{className:l.a.profilePage,children:[Object(b.jsx)("div",{className:l.a.profileInfoContainer,children:Object(b.jsx)(O,{userProfile:e.userProfile,isOwner:e.isOwner,status:e.status,savePhoto:e.savePhoto,updateStatus:e.updateStatus})}),Object(b.jsxs)("div",{className:l.a.profilePageServices,children:[Object(b.jsx)("div",{className:l.a.friendsPage,children:Object(b.jsx)("div",{className:l.a.nameContainer,children:Object(b.jsx)("span",{children:"Friends"})})}),Object(b.jsx)(J,{})]})]})})},U=n(6),q=n(230),W=n(27),z=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"getProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId+"")||this.props.history.push("/login"),this.props.getUserProfile(+e),this.props.getStatus(+e)}},{key:"componentDidMount",value:function(){this.getProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.getProfile()}},{key:"render",value:function(){return Object(b.jsx)(T,{userProfile:this.props.userProfile,isOwner:!this.props.match.params.userId,status:this.props.status,savePhoto:this.props.savePhoto,updateStatus:this.props.updateStatus})}}]),n}(c.a.Component);t.default=Object(W.d)(q.a,Object(D.b)((function(e){var t;return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:null===(t=e.auth.data)||void 0===t?void 0:t.id,isAuth:e.auth.isAuth}}),{getUserProfile:M.d,getStatus:M.c,updateStatus:M.f,savePhoto:M.e}),U.f)(z)}}]);
//# sourceMappingURL=4.01cd101d.chunk.js.map