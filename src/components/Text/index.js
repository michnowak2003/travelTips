import React from "react"

const Text = ({ variant, children, styles }) => {

  switch (variant) {
    case "h1":
      return <h1 style={styles}>{children}</h1>
      break
    case "h2":
      return <h2 style={styles}>{children}</h2>
      break
    case "h3":
      return <h3 style={styles}>{children}</h3>
      break
    case "h4":
      return <h4 style={styles}>{children}</h4>
      break
    case "h5":
      return <h5 style={styles}>{children}</h5>
      break
    case "h6":
      return <h6 style={styles}>{children}</h6>
      break
    case "span":
      return <span style={styles}>{children}</span>
      break
    case "p":
      return <p style={styles}>{children}</p>
      break
    default:
      return <span style={styles}>{children}</span>
      break
  }
}

export default Text
