const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence.charAt(i))  
    if(i === (sentence.length - 1)) {
    console.log("")
  }}, (50*i));
}