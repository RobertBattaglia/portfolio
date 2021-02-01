import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Post from "./post"

const H2 = styled("H2")`
  text-align: center;
`;

const PostList = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          featuredImage {
            description
            file {
              url
            }
          }
        }
      }
    }
  }
  `)

  const { allContentfulBlogPost: { edges } } = data

  return (
    <div>
      <H2>Posts</H2>
      {edges && (
        <>
        {edges.reverse().map(({node: data}) => <Post data={data} />)}
        </>
      )}
    </div>
  )
}

export default PostList
