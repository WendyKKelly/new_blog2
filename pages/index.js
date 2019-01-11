import Layout from '../components/MyLayout.js'



export default () => (
<Layout>
  <div className="wrapper">
<div className="one">
<h1 tabindex="1">Hi and welcome.</h1>
<p>I am Wendy. I tell stories.</p>
</div>
<div className="two"></div>

</div>
    <style jsx>{`
      h1 {
        border-bottom: 2px solid #EDE574};
        display: inline-block;
        line-height: 0.85;

    }
h1:hover {
  border-bottom: 2px solid #E1F5C4};
  display: inline-block;
  line-height: 0.85;
}
    h1:focus {
      background: #EDE574;
    }

      .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto-fill);
    width: 100vw;
  height: 100vh;
  }
  .one {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    background: #ADA996;

  }
  .two {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
    background: #EDE574;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #EDE574, #E1F5C4);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #EDE574, #E1F5C4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  }



    `}</style>
  </Layout>

)
