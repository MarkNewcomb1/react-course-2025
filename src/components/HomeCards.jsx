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
        <Card bg='bg-indigo-100'>
        <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="/add-job.html"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Job
          </a>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards