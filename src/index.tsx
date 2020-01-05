import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import AppNavbar from './containers/appNavbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import Advisor from './containers/advisor'
import './index.scss'
import RatingList from './containers/RatingList'

interface AppProps {
  state?: any
}

interface AppState {
  advisorsList: Array<any>,
  allAdvisors: Array<any>,
  page: number,
  loadingElement?: any,
  loading: boolean
}

class App extends React.Component<AppProps, AppState> {
  private loadingElement: React.RefObject<HTMLDivElement>
  constructor(props: any) {
    super(props)
    this.state = {
      advisorsList: [
        {
          id: 0 as number,
          name: '' as string,
          lastName: '' as string,
          email: '' as string,
          telephone: '' as string,
          bio: '',
          title: '',
          rating: 0
        }
      ],
      allAdvisors: [],
      page: 0 as number,
      loading: false
    }
    this.loadingElement = React.createRef()
  }

  componentDidMount() {
    const self = this
    const cardsContainer = document.getElementsByClassName('advisors-cards')[0]
    const loadingButton = document.getElementsByClassName('loading-button')[0]
    cardsContainer.addEventListener("scroll", () => {
      const options = {
        root: null,
        rootMargin: "300px",
        threshold: 1.0,
        delay: 300
      }

      const observer = new IntersectionObserver(self.handleIntersect, options)
      observer.observe(loadingButton)
    })

    this.loadAdvisors()
  }

  loadAdvisors = () => {
    fetch('/advisors').then(data => data.json()).then(data => {
      this.setState({
        allAdvisors: data,
        advisorsList: data.slice(0, 20)
      })
    })
  }

  handleIntersect = (changes: any, observe: any) => {
    const self = this
    for (let i = 0; i < changes.length; i++) {
      if (changes[i].intersectionRatio > 0.9) {
        self.setState({ loading: true })
        if (self.state.page < self.state.allAdvisors.length - 1) {
          self.loadMoreData()
          break
        }
      }
    }
  }

  loadMoreData = () => {
    this.setState({
      advisorsList: this.state.allAdvisors.slice(0, this.state.advisorsList.length + 1)
    })
  }

  handleSearch = (e: any) => {
    const results = this.state.allAdvisors.filter(advisor => (
      advisor.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1)
    )
    this.setState({
      advisorsList: results
    })
  }

  handleFilter = (e?: any) => {
    if (e === 'reset') {
      this.loadAdvisors()
      return
    }
    const results = this.state.allAdvisors.filter(advisor => (
      advisor.rating === e)
    )
    this.setState({
      advisorsList: results
    })
  }

  render() {
    return (
      <div className="app">
        <AppNavbar onSearch={this.handleSearch} />
        <Container fluid>
          <Row className="show-grid">
            <Col sm={2} >
              <RatingList onSelect={this.handleFilter} reset={() => this.handleFilter('reset')} />
            </Col>
            <Col lg={10} >
              <div className="advisors-cards">
                {!!this.state.advisorsList && this.state.advisorsList.map((item, i) => <div key={i}>
                  <Advisor
                    id={item.id}
                    name={item.name}
                    bio={item.bio}
                    title={item.title}
                    rating={item.rating}
                  /> </div>)}
                <div ref={this.loadingElement} className='loading-button'></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
