##编前语
- 修饰类的行为、修饰类的属性
- ES7的一个提案
- 类的改变在代码编译时发生，不是在运行时
- babel转码或者使用TypeScript
##准备
##### 类的操作 
- class ：类的定义
-  extends： 类 的继承
- decorator: 在多个不同类之间共享、复用一些方法
####babel 转码器的支持
 ```
npm install  babel-core   babel-plugin-transform-decorators  -D 
    //.babelrc
{
  "plugins":["transform-decorators"]
}
 ```
 ##### 修饰类
  - 添加静态属性
  - 添加静态方法
  - 类的实例添加属性
  - 类的实例添加方法 
  - 类中添加一个对象
##### 修饰类的属性
 - 类属性修饰
#####常用修饰器
- [core-decorators](https://www.npmjs.com/package/core-decorators)
 -- autobind
 -- deprecate
 -- Override
 -- Suppvisewarnings
 - [traits-decorator](https://www.npmjs.com/package/traits-decorator)
  -- traits

  ## [vue-class-component](https://www.npmjs.com/package/vue-class-component)