(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(12),n(3)),s=n(4),c=n(6),m=n(5),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],h=function(e){var a=e.id,n=e.name,t=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robot"}),r.a.createElement("h2",null,n),r.a.createElement("p",null,t))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,a){return r.a.createElement(h,{key:a,id:e.id,name:e.name,email:e.email})})))},b=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search rebots",onChange:a}))},g=function(e){Object(c.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:u,searchField:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(d,{robots:a}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.17278598.chunk.js.map