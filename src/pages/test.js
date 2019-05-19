import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import SplitText from "react-pose-text"

class Test extends React.Component{
	render(){
		const charPoses = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30,
      },
    }
		return(
			<Layout>
				<Helmet>
		      <title>Functional vs Class Components</title>
		      <meta name="description" content="When to use functional component and class components" />
		    </Helmet>
	        <div id="main" className="alt">
	          <section id="one">
	            <div className="inner">
                <header className="major">
                    <h1>
	                    <SplitText
	                    initialPose="exit"
	                    pose="enter"
	                    charPoses={charPoses}
	                  >
	                  	Functional vs Class Component
	                  </SplitText>
                  </h1>
                </header>
                	<h4>When to use functional component:</h4>
                	<p>If your page only requires a plain JavaScript function which accepts props as an argument and returns a React element</p>
                	<pre>
									  <code style={{background: '#000'}}>
{`
	import React from 'react'
	import Layout from './layout'

	const Page = () => (
		<Layout>
			<div>Body Content<div>
		</Layout>
	)
	export default Page
	`}
									  </code>
									</pre>
									<h4>When to use class component:</h4>
									<p>A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits</p>
									                	<pre>
									  <code style={{background: '#000'}}>
{`
import React from 'react'
import Layout from './layout'

class Page extends React.Component{
    render(){
        return(
            <Layout>
            <div>Body Content<div>
            </Layout>
        )
    }
}

export default Page
	`}
									  </code>
									</pre>

	               </div>
	          </section>
	        </div>
			</Layout>
			)
	}
}

export default Test