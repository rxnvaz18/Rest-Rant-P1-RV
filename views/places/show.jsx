const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>No comments yet!</h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong>
              </h3>
              <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name}/>
            </div>
              <h3>Located in {data.place.city}, {data.place.state}</h3>
              
              <div className="col-sm-6">
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisine}</h4>
            </div></div>

            <div>
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </div>
            <div>
              <h2>Comments</h2>
              {comments}
              </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
            
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                 <button type="submit" className="btn btn-danger">
                        Delete
                  </button>
              </form> 
              <h2>Need to Rant or Rave about a place?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Critic</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = show
