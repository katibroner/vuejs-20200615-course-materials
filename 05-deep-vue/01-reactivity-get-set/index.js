function defineReactivity(data) {
  Object.keys(data).forEach(key => {
    let value = data[key]
    Object.defineProperty(data, key, {
      get() {
        console.log(`[REACTIVITY] GET value of ${key}: ${value}`);
        return value;
      },
      set(newValue) {
        const oldValue = data[key];
        console.log(`[REACTIVITY] SET value of ${key}: ${oldValue} -> ${newValue}`);
        value = newValue;
      }
    })
  })
}

const data = {
  firstName: 'Alice',
  lastName: 'Smith',
};

defineReactivity(data);

console.log('Print Initial Value');
console.log(JSON.stringify(data));

console.log('\nLet\'s change firstName');
data.firstName = 'Bob';

console.log('\nPrint New Value');
console.log(JSON.stringify(data), '\n');
