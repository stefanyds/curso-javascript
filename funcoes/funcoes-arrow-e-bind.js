console.log('**** Function ****')
let compareWithThis = function (context) {
    console.log(this === context)
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global)
compareWithThis(obj)

console.log('**** Arrow Function ****')
let compareWithThisArrow = context => console.log(this === context)

//!!! NO ARROW, O THIS É MODULE.EXPORTS !!!
compareWithThisArrow(global)
compareWithThisArrow(module.exports)

console.log('**** Arrow Function e bind ****')
compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj)