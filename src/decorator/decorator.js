import {autobind,deprecate} from 'core-decorators'
import {traits} from 'traits-decorator'
const testfn = (isTrue) =>{
    return  (target)=>{
        target.isTrue = isTrue
        target.myfun = () =>{
            return 'myfun'
        }
    }
}
@testfn(true)
class A {

}
// A = testfn(true)(A) || A
console.log('a',A.isTrue)
console.log(A.myfun())
// -----------------------------
const testfn2 = (isTrue) => {
    return (target)=> {
        target.prototype.isTrue = isTrue
        target.prototype.myfun = () =>{
            return 'myfun'
        }
    }
}
@testfn2(false)
class B {

}
const b = new B()
console.log('bb',b.isTrue)
console.log('bbb',b.myfun())
// ----------------
const obj = {
    a:1,
    fn(){
        return '我是obj'
    }
}
const testfn23 =(list) =>{
    return (target)=>{
        target.prototype = {...target.prototype,...list}
    }
}
@testfn23(obj)
class C {

}
const c = new C()
console.log('c',c.a)
console.log('c',c.fn())
// -----------------------------
const obj2 = {
    a:1,
    fn(){
        return 'fn'
    }
}
console.log(Object.getOwnPropertyDescriptor(obj2,'a'))
let readonly = (target,name,descriptor) => {
    console.log('name is',target ,name,descriptor)
    descriptor.writable = false
    target.age = 18
}
class D {
    @readonly
    name = 'duxing'
        namefn(){
        return `${this.name}`
    }
}
const d = new D()
// d.name = 'boben'
console.log(d.name)
// -------
class E {
    @autobind
    mythis(){
        return this
    }
}
const e = new E ()
// console.log(e.mythis())
const mythis = e.mythis
console.log(mythis())
// -----------------
class F {
    @deprecate('this method is dstroy,please use getNewname',{url:'www.baidu.com'})
    getname(){

    }
}
const f = new F()
console.log(f.getname())
// ------ 
const obj3 = {
    fn(){
        return 'fn'
    }
}
class H {
    h(){
        return 'h'
    }
}
const obj4 = {
    fn2(){
        return 'fn2'
    }
}
@traits(obj3,obj4,H)
class G {

}
const g = new G ()
console.log(g.h())
// -----