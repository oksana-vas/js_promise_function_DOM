function n(n,e){return new Promise(function(t){n.addEventListener(e,function(){t("\n        It was ".concat(e," on the element: ").concat(n.nodeName,",\n        id: ").concat(n.id,".\n      "))})})}var e=function(n){document.body.insertAdjacentHTML("afterbegin",'\n    <div class="message">'.concat(n,"</div>\n  "))},t=document.getElementById("login"),c=document.getElementById("password"),i=document.getElementById("submit");n(t,"click").then(e),n(c,"click").then(e),n(i,"click").then(e),n(t,"input").then(e),n(c,"input").then(e),n(t,"blur").then(e),n(c,"blur").then(e),n(i,"blur").then(e);//# sourceMappingURL=index.ef956567.js.map

//# sourceMappingURL=index.ef956567.js.map
