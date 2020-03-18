## Views
在views目录下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。
例子：
* @/src/views/svg-icons/index.vue
* @/src/views/svg-icons/require-icons.js
  
使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。
* 横线连接 (kebab-case) 也是官方推荐的命名规范之一 [文档](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
* views下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)
* 页面的url 也都是横线连接的，比如https://www.xxx.admin/export-excel，所以路由对应的view应该要保持统一
* 没有大小写敏感问题
  
## Component
所有的Component文件都是以大写开头 (PascalCase)，这也是官方所推荐的。但除了 index.vue。
例子：
* @/src/components/Charts/Line.vue
* @/src/views/example/components/Button.vue
* @/src/components/BackToTop/index.vue

## JS 文件
所有的.js文件都遵循横线连接 (kebab-case)。
例子：
* @/src/utils/utils.js
* @/src/views/svg-icons/require-icons.js
* @/src/components/MarkdownEditor/default-options.js

