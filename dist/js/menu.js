var navTreeChild = Vue.extend({
  name: 'nav-tree-child',
  template:[
  '<ul class="treeview-menu">',
    '<li v-for="item in data">',
    	'<a :href="item.attributes.url" class="J_menuItem">',
            '<i class="fa  fa-angle-right"></i>{{ item.text }}',
       '</a>',
       '<nav-tree-child :data="item.children" :root="false"></nav-tree-child>',
    '</li>',
  '</ul>'].join(''),
  props:{data:{}}
})
var navTree = Vue.extend({
  name: 'nav-tree',
  template:[
    '<li v-for="item in data" :class="item.children.length>0?\'treeview\':\'\'">',
        '<template v-if="item.children.length>0">',
            '<a href="#">',
                '<i class="fa fa-dashboard"></i> <span>{{ item.text }}</span>',
                '<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>',
            '</a>',
            '<nav-tree-child :data="item.children"></nav-tree-child>',
        '</template>',
        '<template v-else>',
            '<a :href="item.attributes.url" class="J_menuItem">',
                '<i class="fa fa-dashboard"></i> <span>{{ item.text }}</span>',
            '</a>',
            '<nav-tree-child :data="item.children"></nav-tree-child>',
        '</template>',
    '</li>'].join(''),
  props:{data:{}}
})
//注册个递归组件
Vue.component('navTreeChild',navTreeChild)
Vue.component('navTree',navTree)

new Vue({
  el:'body',
  data:function(){
    return {
      data:{
       tree:[
           {
           "attributes":
           {
               "leaf":false,
               "parentId":0,
               "url":""
           },
           "checked":false,
           "children":[
                   {
                       "attributes":
                       {
                           "leaf":true,
                           "parentId":1,
                           "url":"http://localhost:3000/dist/app/V2/CRUD.html"
                       },
                       "checked":false,
                       "children":[],
                       "iconCls":"news_list",
                       "id":3,
                       "state":"open",
                       "text":"增删改查模板"
                   }
               ],
               "iconCls":"news_manage",
               "id":1,
               "state":"closed",
               "text":"例子"
               },
               {
                   "attributes":
                   {
                       "leaf":false,
                       "parentId":0,
                       "url":""
                   },
                   "checked":false,
                   "children":[
                       {
                           "attributes":
                           {
                               "leaf":true,
                               "parentId":1,
                               "url":"http://localhost:3000/dist/app/V2/Vue.html"
                           },
                           "checked":false,
                           "children":[],
                           "iconCls":"news_list",
                           "id":3,
                           "state":"open",
                           "text":"表格"
                       },
                       {
                           "attributes":
                           {
                               "leaf":true,
                               "parentId":1,
                               "url":"http://localhost:3000/dist/app/V2/Form.html"
                           },
                           "checked":false,
                           "children":[],
                           "iconCls":"news_list",
                           "id":3,
                           "state":"open",
                           "text":"表单"
                       },
                       {
                           "attributes":
                           {
                               "leaf":true,
                               "parentId":1,
                               "url":"http://localhost:3000/dist/app/V2/Modal.html"
                           },
                           "checked":false,
                           "children":[],
                           "iconCls":"news_list",
                           "id":3,
                           "state":"open",
                           "text":"模态框"
                       }
                   ],
                   "iconCls":"news_manage",
                   "id":1,
                   "state":"closed",
                   "text":"参数"
               },
               {
                   "attributes":
                   {
                       "leaf":false,
                       "parentId":0,
                       "url":""
                   },
                   "checked":false,
                   "children":[
                       {
                           "attributes":
                           {
                               "leaf":true,
                               "parentId":1,
                               "url":"http://localhost:3000/dist/app/V2/Vue.html"
                           },
                           "checked":false,
                           "children":[],
                           "iconCls":"news_list",
                           "id":3,
                           "state":"open",
                           "text":"表格"
                       },
                       {
                           "attributes":
                           {
                               "leaf":true,
                               "parentId":1,
                               "url":"http://localhost:3000/dist/app/V2/Form.html"
                           },
                           "checked":false,
                           "children":[],
                           "iconCls":"news_list",
                           "id":3,
                           "state":"open",
                           "text":"表单"
                       }
                   ],
                   "iconCls":"news_manage",
                   "id":1,
                   "state":"closed",
                   "text":""
               }
            ]
      }
    }
  }
})