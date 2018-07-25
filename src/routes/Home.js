import Vue from 'vue';
import Component from 'vue-class-component';
import {testtable,testtable2,test3,test4,readonly} from '../decorator/decorator';
import {autobind, override, deprecate} from 'core-decorators';
import {traits, excludes, alias} from 'traits-decorator'
@testtable
class MytesttableClass {

}
console.log('@testtable',MytesttableClass.isTestable)
@testtable2(false)
class MytesttableClass2 {

}
console.log('@testtable2',MytesttableClass2.isTestable)
@test3
class TestClass {

}
const testclass = new TestClass()
console.log('@test3',testclass.isTestable)
const Foo = {
    foo(){console.log('foo')}
}
@test4(Foo)
class TestClass4 {

}
const testclass4 = new TestClass4()
console.log('test4',testclass4.foo())

class Person {
    @readonly
    first = 'pin'
    last = 'duoduo'
    name() {
        return `${this.first}${this.last}`
    }
    @autobind
    getPerson(){
        console.log('this',this)
        return this
    }
}
const person = new Person()
console.log(Object.getOwnPropertyDescriptor(person,'name'))
console.log('person',person.name())
// person.first = 'qian'
console.log('person',person.name())
console.log('descriptor',Object.getOwnPropertyDescriptor(Person.prototype,'name'))
console.log('getPerson',person.getPerson())
let getPerson = person.getPerson
console.log('getPerson2',getPerson())
class Parent {
    speak(){

    }
}
class Child extends Parent {
    @override
    speak(){

    }
    @deprecate('werwr',{url:'1213123'})
    facepalm(){
        
    }
}
let child = new Child()
child.facepalm()
class Tfoo {
    foo(){
        console.log('foo')
    }
}
const Tbar = {
    bar () {
        console.log('bar')
    },
    foo(){
        console.log('aliasFoo')
    }
}
// @traits(Tfoo,Tbar::excludes('foo'))
@traits(Tfoo,Tbar::alias({foo:'aliasFoo'}))
class Myclass {

}
let myclass = new Myclass()
myclass.foo()
myclass.bar()
myclass.aliasFoo()
console.log('myclass',myclass)
@Component({})
export default class App extends Vue {
    render(){
        return (
            <div>
                home page
            </div>
        )
    }
}
console.log('App',new App())