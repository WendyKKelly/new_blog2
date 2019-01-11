import Header from './Header'

const layoutStyle = {
  padding: 0

}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
