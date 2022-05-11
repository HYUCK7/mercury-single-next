import '../styles/globals.css'
import { Nav, Header, Footer } from'@/components'
import withReduxSaga from 'next-redux-saga'
import PropTypes from 'prop-types'
import { wrapper } from '@/modules/store.js'

const App = ({ Component }) => {
  return (<>
    <Header/>
   <Nav/><div className='AppMinHeight'>
   <Component />
   </div>
   <Footer/>
   </>
    )
}
App.propTypes ={
  Component: PropTypes.elementType
}
export default wrapper.withRedux(withReduxSaga(App))