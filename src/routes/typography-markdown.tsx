import { Title } from "solid-start"
import Layout from "~/layouts/Layout"

export default function TypographyHtmlPage() {
  return (
    <Layout>
      <Title>Typography Markdown</Title>
      <p class="alert alert-warning">TODO: install some markdown parser</p>


      # Markdown Cheat Sheet

      Purloined from [The Markdown Guide](https://www.markdownguide.org).

      This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

      ## Basic Syntax

      These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

      ### Heading

      # H1

      ## H2

      ### H3

      #### H4

      ##### H5

      ###### H6

      ### Bold

      This is some **bold text**

      ### Italic

      And here we have _italicized text_

      ### Blockquote

{">"} blockquote

      ### Ordered List

      1. First item
      2. Second item
      3. Third item

      ### Unordered List

      - First item
      - Second item
      - Third item

      ### Code

      `code`

      ### Horizontal Rule

      ---

      ### Link

      [Markdown Guide](https://www.markdownguide.org)

      ### Image

      ![alt text](https://www.markdownguide.org/assets/images/tux.png)

      ## Extended Syntax

      These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

      ### Table

      | Syntax    | Description |
      | --------- | ----------- |
      | Header    | Title       |
      | Paragraph | Text        |

      ### Fenced Code Block

      ```text
      ```

      ### Footnote

      Here's a sentence with a footnote. [^1]

      [^1]: This is the footnote.

      ### Heading ID

      ### Definition List

      term
      : definition

      ### Strikethrough

      ~~The world is flat.~~

      ### Task List

      - [x] Write the press release
      - [ ] Update the website
      - [ ] Contact the media

      ### Emoji

      That is so funny! :joy:

      (See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

      ### Highlight

      I need to highlight these ==very important words==.

      ### Subscript

      H~2~O

      ### Superscript

      X^2^

    </Layout>
  )
}
