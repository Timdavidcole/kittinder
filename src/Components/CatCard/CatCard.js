import React from 'react'
import agent from '../../agent'

class CatCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      resolved: false,
      loading: false,
      error: null
    }
  }

  componentDidMount () {
    agent.Images.get({ breed_id: this.props.cat.id }).then(data =>
      this.setState({ image: data[0].url })
    )
  }

  render () {
    const {cat} = this.props
    return (
      <div>
        <h2>{cat.name}</h2>
        <img
          src={this.state.image}
          alt={''}
          style={{ maxWidth: '100%', maxHeight: '100vh' }}
        ></img>
        <div style={{ width: '100%' }}>
          <span>{cat.description}</span>
        </div>
      </div>
    )
  }

}

export default CatCard
