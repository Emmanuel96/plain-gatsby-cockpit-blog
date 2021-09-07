import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    {
      data.allCockpitBlogs.nodes.map( node=>(
        <div>
            <div>
                <Link to={`/blog/${node.cockpitId}`}>{}</Link>
                <h3><Link to={`/blog/${node.cockpitId}`}>{node.title.value}</Link></h3>
                <ul>
                    <li>Created at: {node.cockpitCreated}</li>
                </ul>
                <div>
                    <p>Summary: {node.title.value}..</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
      ))
    }

  </Layout>
)


// step 2: Export a page query 
export const query = graphql `
query {
    allCockpitBlogs {
      nodes {
        title {
          value
        }
        text {
          value
        }
        published {
          value
        }
        slug{
          value
        }
        author{
            value
        }
        id
        cockpitCreated(formatString: "DD-MM-YYYY")
        cockpitId
      }
    }
  }
`

export default IndexPage
