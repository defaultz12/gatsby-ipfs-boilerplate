# gatsby-ipfs-boilerplate

This repository (*repo*) contains a website template for building a website with
the [Gatsby framework](https://www.gatsbyjs.org/).

- [Live Demo](http://troutsblog.com)
- [Mirror](https://ipfs.io/ipfs/QmbG75ohG6oKrnDFiWXVAtTc79pfyELNjZ9cvhYRMyyN2q/)

Unlike other Gatsby starters and website templates, this template has some
specific features:
- Markdown support added. Easily create new research articles and blog posts.
Save your markdown files to the [markdown](./markdown) directory.
- [IPFS](https://ipfs.io) ready. The `public` folder where the site gets built
is ready to be added to the IPFS network, and will serve the website from any
IPFS gateway. [Here's an example](https://ipfs.io/ipfs/QmbG75ohG6oKrnDFiWXVAtTc79pfyELNjZ9cvhYRMyyN2q/)
- Responsive and Mobile First. The site template is originally based
on [Fourty by HTML5 Up](https://github.com/codebushi/gatsby-starter-forty). It
features mobile-first styling and easy-to-use grid system for controlling the
mobile and desktop displays.

This template is intended to work in concert with two other pieces of software:
- The [koa-ipfs-blog](https://github.com/christroutner/koa-ipfs-blog) is the back-end
server intended to serve up the website generated by this front end repository.
It serves the content in a conventional way, but also syndicates it over the
IPFS and Tor networks.
- The [memo-push](https://github.com/christroutner/memo-push) tool is used to
publish the IPFS link on the Bitcoin Cash blockchain, using
the [Memo.cash](https://memo.cash) protocol.

Together, these three pieces of software can publish progressive web apps in a
way that is very hard to censor. They were created to encourage developers to
combine the forces of Bitcoin Cash, IPFS, and Tor to unleash a vibrant online
economy.

- [Here is a non-technical video](https://www.youtube.com/watch?v=RlNVyatwd5M) overview
of how governments censor content on the internet, and how decentralized publishing
tools can be used to circumvent it.

- [Here is a walkthrough video](https://www.youtube.com/watch?v=Ez9YXpu_Chs&t=971s) of
how to use this repository along with
the [memo-push](https://github.com/christroutner/memo-push) tool to publish a
website in a decentralized, censorship-resistant way in order to leverage the
[Streisand Effect](https://en.wikipedia.org/wiki/Streisand_effect).

## Installation

Install this starter
(assuming [Gatsby is installed](https://www.gatsbyjs.org/docs/gatsby-cli/)) by
running from your CLI:
<br/>
`gatsby new gatsby-ipfs-boilerplate https://github.com/christroutner/gatsby-ipfs-boilerplate`

Run `gatsby develop` in the terminal to start the dev site.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```

## Markdown

By default, the website offers two different areas to post your markdown files
inside the [markdown](./markdown) directory:
- The `blog` directory will add your file to the `/blog` page, sorted by date.
- The `research` directory will list articles based on topics, on the
`/research` page. These articles are ordered by topic instead of by date.
Topics correspond to the subdirectories in the `research` directory.




## ARIEL'S NOTES IN DOING PART 1:

Part 1 Notes:
1. Fork this public github repository https://github.com/christroutner/gatsby-ipfs-boilerplate to your own github account and make sure it’s public.
2. Go to your forked github repository
3. Clone it to your local folder. Example:
git clone https://github.com/defaultz12/gatsby-ipfs-boilerplate
4. Navigate your local folder where the gatsby-ipfs-boilerplate and open the terminal(use git cmd for windows https://git-scm.com/downloads)
5. Install all the necessary npm plugins inside your gatsby-ipfs-boilerplate/src/package.json. Run this command.
npm install
6. Install gatsby-cli and install it globally
npm install -g gatsby-cli
7. Run the gatsby template
gatsby develop
8. After running gatsby develop, access localhost:8000 to your browser
9. Proceed to the task

TASK 1:
Create a new markdown page in markdown/blog(COMPLETED)

Since this template already supports dynamic reading of markdown files by installing gatsby gatsby-source-filesystem and locate where are the markdown files and converting the markdown files and readable by graphql.

We could just add another blog entry by going to gatsby-ipfs-boilerplate -> markdown -> blogs

If there are currently blog markdown templates, just copy it and just replace the values.
Currently, there are 5 fields on the blogs:
- date
- title
- root
- path
- html body

Create a new markdown file -> task1.md
```
---
date: "2019-05-19"
title: "Task 1: Creating new blog markdown"
root: "/blog"
path: "/blog/task1-create-new-blog"
---

This article is for an IPFS boilerplate that I'm working on. I am currently creating a new markdown file under blogs with the latest date.

Will it appear as a latest blog?
<br />
Will this be queryable in graphql?
<br />
Will it create another blog page?
```

2.Create a new page in src/pages/test.js(COMPLETED)


Go to src/pages
Create new file -> test.js

There are 2 types of creating a web page using gatsby(based from react)
Functional Component vs Class Component

When to use functional component:
If your page only requires a plain JavaScript function which accepts props as an argument and returns a React element


When to use class component:
A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits.

Functional Component Example:
```
import React from 'react'
import Layout from './layout'

const Page = () => (
    <Layout>
        <div>Body Content<div>
    </Layout>
)

export default Page
```

Class Component Example:
```
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
```

