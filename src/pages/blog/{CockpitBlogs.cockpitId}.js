import * as React from 'react'
import Layout from '../../components/layout.js'
import { graphql} from 'gatsby'
import blogImage from '../../images/gatsby-astronaut.png'


const BlogPost = ({data})=>{
    console.log(data.cockpitBlogs.title)
    return (
        <Layout pageTitle={data.cockpitBlogs.title.value}>
            <h5>{data.cockpitBlogs.title.value}</h5>
            <div>
              <img src={blogImage} alt="Blog"/>
            </div>
            <p>Created at: {data.cockpitBlogs.cockpitCreated}</p>
            <div>
                {data.cockpitBlogs.text.value}
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($id: String) {
    cockpitBlogs(id: {eq:$id}) {
      cockpitId
      cockpitCreated(formatString: "DD-MM-YYYY")
      id
      text {
        value
      }
      author{
        value
      }
      title {
        value
      }
    }
  }
`
export default BlogPost