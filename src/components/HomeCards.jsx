import React from 'react'
import Card from './Card'

const HomeCards = () => {
  const codeSnippet = `function count() {
    let count = 0;

    return function() {
      count ++;
      return count;
    }
  }

  const increment = count();

  console.log(increment()); // 1
  console.log(increment()); // 2
  console.log(increment()); // 3
  `

  const apiCombinedObject = `{
  user: { id: 123, name: "John" },
  posts: [ /* array of posts */ ]
}
`
  const apiInstructions = `/api/user returns a user object like { id, name }


/api/posts?userId=123 returns that user's blog posts`

const apiAnswer = `
  async function fetchUserWithPosts() {
  try {
    const userRes = await fetch('/api/user');
    if (!userRes.ok) throw new Error('Failed to fetch user');
    const user = await userRes.json();

    const postRes = await fetch('/api/posts?userId=\${user.Id});
    if (!postRes.ok) throw new Error('Failed to fetch posts');
    const posts = await postRes.json();
    return {user, posts};
      } catch (err){
          console.error('Error in fetchUserWithPosts:', err.message)
          return null;
        }
  }
`

const thisQuestion = `
const user = {
  name: "Alex",
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  },
};

const greetFn = user.greet;
greetFn();
`

const thisAnswer1 = `
  const greetFn = () => user.greet();
`

const thisAnswer2 = `
  const greetFn = user.greet.bind(user);
`

const loggedQuestion = `
console.log("1");

const promise = new Promise((resolve, reject) => {
  console.log("2");
  resolve("3");
});

promise.then((value) => {
  console.log(value);
});

console.log("4");

`
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 className="font-bold">What is a closure?</h2>
          <p>It's the function and what variables are in scope when the function's called. So it remembers the variables from the surrounding scope, even after the outer function's finished running. It's like the function has a backpack full of variables it had access to when it was created. 
          </p>
            <pre id="code">
              <code className="whitespace-pre-wrap">
                {codeSnippet}
              </code>
            </pre>
        </Card>
        <Card>
          <h2 className="font-bold">Write async function that:</h2>
          <p>Fetches the user, Then fetches their posts using their ID, Returns a combined object like:
          </p>
          <p>{apiCombinedObject}</p>
          <p>You have two APIs:</p>
          <p>{apiInstructions}</p>
            <pre id="code">
              <code className="whitespace-pre-wrap">
                {apiAnswer}
              </code>
            </pre>
        </Card>
      </div>





      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 className="font-bold">"this": What will be logged to the console, and why?</h2>
          <pre id="code">
              <code className="whitespace-pre-wrap">
                {thisQuestion}
              </code>
            </pre>
          <p> "Hello, my name is undefined" 
          </p>
          <p>It's because greetFn is a variable based on user.greet, but that was originally a method on the user object.</p>
          <p>When you call it by itself, it loses its context. To fix this: either wrap it in a closure:</p>
            <pre id="code">
              <code className="whitespace-pre-wrap">
                {thisAnswer1}
              </code>
            </pre>
            <p>Or bind it:</p>
            <pre id="code">
              <code className="whitespace-pre-wrap">
                {thisAnswer2}
              </code>
            </pre>
        </Card>
        <Card>
          <h2 className="font-bold">Consider the following code. What will be logged, and in what order? Explain why.</h2>
            <pre id="code">
              <code className="whitespace-pre-wrap">
                {loggedQuestion}
              </code>
            </pre>
            <p>1 2 4 3</p>
            <p>The first one gets logged immediately. The second one is called by the promise.then, but the Promise function itself is synchronous. 2 gets logged right away.</p>
            <p>However, the resolve part schedules the .then callback to execute after the current call stack is empty. The current call stack isn't empty until after the fourth console log finishes, so 4 is logged next.</p>
            <p>Finally, after the call stack is empty, the .then callback can run and logs 3.</p>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards