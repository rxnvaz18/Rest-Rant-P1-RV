const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <a href={`/places/${data.i}/edit`} className="btn btn-warning">Edit</a>
            <div>
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </div>
            <div>
              <h2>Comments</h2>
              <p>No comments yet!</p>
              </div>
              <form method="POST" action={`/places/${data.i}?_method=DELETE`}> 
                 <button type="submit" className="btn btn-danger">
                        Delete
                  </button>
              </form> 
          </main>
        </Def>
    )
}

module.exports = show
