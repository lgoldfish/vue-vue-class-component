export function testtable (target) {
    target.isTestable = true;
}
export const testtable2 = (isTestable)=> {
    return (target) => {
        target.isTestable = isTestable
    }
}
export const test3 = (target) => {
    target.prototype.isTestable = true
}
export const test4 = (...list) => {
    console.log('list',...list)
    return (target) => {
        Object.assign(target.prototype,...list)
        // target.prototype = {...target.prototype,...list}
    }
}
export const readonly = (target,name,descriptor) => {
    console.log('descriptor',descriptor)
    descriptor.writable = false
    descriptor.enumerable = true
    return descriptor
}