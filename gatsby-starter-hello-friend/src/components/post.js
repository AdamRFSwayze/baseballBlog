import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Navigation from './navigation'

import style from '../styles/post.module.css'


import rehypeReact from "rehype-react"
import DataTable from './data_table';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "my-component": DataTable }
}).Compiler



const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  htmlAst,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path
  const previousLabel = previousPost && previousPost.frontmatter.title
  const nextPath = nextPost && nextPost.frontmatter.path
  const nextLabel = nextPost && nextPost.frontmatter.title

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1>{excerpt ? <Link to={path}>{title}</Link> : title}</h1>
        <div className={style.meta}>
          {date} {author && <>— written by {author}</>}
        </div>
        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={style.coverImage}
          />
        )}
        {excerpt ? (
          <>
            <p>{excerpt}</p>
            <Link to={path} className={style.readMore}>
              Read more →
            </Link>
          </>
        ) : (
          <>
          <div>{renderAst(htmlAst)}</div>
            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  htmlAst: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

export default Post
