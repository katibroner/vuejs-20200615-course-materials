class Dep {
  static target
  subs

  constructor () {
    this.subs = []
  }

  depend () {
    if (Dep.target && !this.subs.includes(Dep.target)) {
      this.subs.push(Dep.target)
    }
  }

  notify () {
    for (let i = 0, l = this.subs.length; i < l; i++) {
      this.subs[i]()
    }
  }
}

class Observer {
  value;
  dep;
  vmCount; // number of vms that have this object as root $data

  constructor (value) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    Object.defineProperty(value, '__ob__', {
      value: this,
      enumerable: false,
      writable: true,
      configurable: true
    });
    this.walk(value)
  }

  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}

function defineReactive (obj, key) {
  const dep = new Dep()
  let val = obj[key]

  Object.defineProperty(obj, key, {
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      val = newVal
      dep.notify()
    }
  })
}

function observe (value) {
  return new Observer(value)
}

function watcher(target) {
  Dep.target = target;
  target();
  Dep.target = null;
}

const data = {
  firstName: 'Alice',
  lastName: 'Smith',
  trash: 'some trash',
}

observe(data);

let fullName = undefined;
const setFullName = () => {
  console.log('Compute FullName');
  fullName = `${data.firstName} ${data.lastName}`;
};

let fullName2 = undefined;
const setFullName2 = () => {
  console.log('Compute FullName2');
  // setFullName();
  fullName2 = fullName + '2';
};

watcher(setFullName);
watcher(setFullName2);

console.log('Print Initial Value');
console.log(JSON.stringify(data));

console.log('Print Computed');
console.log(fullName);
console.log(fullName2);

console.log('\nLet\'s change firstName');
data.firstName = 'Bob';

console.log('\nLet\'s change trash');
data.trash = 'new trash';

console.log('\nPrint New Value');
console.log(JSON.stringify(data), '\n');

console.log('Print Computed');
console.log(fullName);
console.log(fullName2);

