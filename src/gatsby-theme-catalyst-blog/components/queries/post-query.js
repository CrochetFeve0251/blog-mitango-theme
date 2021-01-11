import React from "react"
import { graphql } from "gatsby"
import Post from "../../../components/post"

export default ({ data }) => {
  const { catalystPost, previous, next } = data
  return (
    <Post
      data={{ ...data, post: catalystPost }}
      previous={previous}
      next={next}
    />
  )
}

export const query = graphql`
  query($id: String!, $previousId: String, $nextId: String) {
    catalystPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      subTitle
      author
      authorLink
      tags
      categories
      keywords
      timeToRead
      date(formatString: "D MMMM YYYY")
      featuredImageCaption
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socialImage {
        childImageSharp {
          seo: resize(width: 1024) {
            src
            width
            height
          }
        }
      }
    }
    previous: catalystPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "DD MMMM YYYY")
    }
    next: catalystPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: " DD MMMM YYYY")
    }
  }
`
