/** @jsx jsx */
import { jsx, Link } from "theme-ui";

const Footer = () => {

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by Anirudh. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Website source code"
      href="https://github.com/theanirudhvyas/nextjs-website"
        >
          Source
        </Link>
        {` `}
        on
        {` `}
          Github
      </div>
    </footer>
  )
}

export default Footer
