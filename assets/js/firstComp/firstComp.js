import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Goku',
      health: '100',
      level: 1,
      lowLevelClass: 'danger-red',
      midLevelClass: 'danger-orange'

    }
    this.clickedgirl = this.clickedgirl.bind(this)
  }


clickedgirl(){
  this.setState({
    health: this.state.health - 15
  }, function() {
    console.log( 'Your current HP is' + this.state.health )
  })
}


  render () {

    return (<div id={'parent'}>
    <Header />
        <div className={`blue-bg ${(this.state.health < 75) ? this.state.midLevelClass : ''} &&
        ${(this.state.health <  25 ) ? this.state.lowLevelClass : '' }` }>
        <div className={'user-info'}>
        <h3> Name: {this.state.name}</h3>

        <h3>  level: {this.state.level}</h3>
        </div>
        <GirlImage alphaflow={ this.clickedgirl } health={this.state.health}/>
      </div>
      </div>
    )

  }
}

// Second Component ------------------------------------------------->

class GirlImage extends Component {
  constructor () {
    super()
    this.state = {
      gameOver: 'Sorry you are dead!!!!'
    }
  }
  render () {

    return (
      <div className="GirlImageComp">
      <img src ="img/power.png" alt= {'girl with babe'} onClick={this.props.alphaflow} />
      <h3> health: {(this.props.health <= 0) ? this.state.gameOver : this.props.health}</h3>
      </div>)
  }
}

var Header = function () {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

    </header>)
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
