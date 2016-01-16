class Greeting {
  constructor(){
    this.className='Greeting';
  }

  toString(){
    return 'Hello visitor';
  }

  show(){
    console.log('this is show method ',this.className);
  }
}

export default Greeting
