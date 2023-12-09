const React = require('react')
const Def = require('./default')

function home () {
return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="./images/foodpic.jpg" alt="chia fruit pudding"/>
            
            <div>
                Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </div>
        </main>
    </Def>
)
}

module.exports = home