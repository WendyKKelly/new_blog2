import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
    <div className="wrapper">
  <div className="one">One</div>
  <div className="two">Two</div>
  <div className="three">Three</div>
  <div className="four">Four</div>
  <div className="five">Five</div>
  <div className="six">Six</div>
  </div>
      <style jsx>{`
        .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
    }
    .one {
      grid-column: 1 / 3;
      grid-row: 1;
    }
    .two {
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    }
    .three {
      grid-column: 1;
      grid-row: 2 / 5;
    }
    .four {
      grid-column: 3;
      grid-row: 3;
    }
    .five {
      grid-column: 2;
      grid-row: 4;
    }
    .six {
      grid-column: 3;
      grid-row: 4;
    }
      `}</style>
      </Layout>
)
