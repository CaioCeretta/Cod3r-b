## Margin Collapsing

In this lesson i ended up with a margin collapsing

Margin collapsing is a css rule that affects the vertical margin between the elements. This rule determines that, when two
or more vertical margins meet, they will merge in one margin, which the size of it is equal to the bigger margin, or, in
some specific cases, their sum.

The margin collapse occurs in three main scenarios

1. Between siblings elements

if two sibling elements are one on /top of the other (without border or padding between them), its vertical margins will
merge in one, so if, for example

div1 { marginBottom: 20px } and div2 { marginTop: 10px}

instead of adding the two, which would be 30px, the browser will use the bigger one, which is 20

2. Between a parent element and its last child

If the first, or last child has a vertical margin that touches the parent internal border, (w/o border, padding or other
content between them ), this margin can "escape" from the parent, merging with the its external margin

so, for example

<div style="margin: 20px;">
  <div style="margin-top: 10px;">Filho</div>
</div>

the top margin of the child, 10px with the external margin of the parent, 20px, they merge, and will result in 20px total

3. In empty elements

If a block element is empty (without content, border or padding), and has margins, and the top and lower margins
can merge

<div style="margin: 20px 0"></div>

the top and bottom margin of the empty element will merge, resulting in one only 20px margin, and not 40

in summary

1. Only vertical margins collapse, horizontal margins never collapse
2. The size of the collapsed margin is equal to the bigger value between the margins
3. Borders, padding, and content between elements, will unable the collapse

## Height of the page 100% and of the container 100vh

This means that the body shall have the same height as the parent, in this case, the html, so for the body to use height: 100%
correctly, the html element, must also have the height of 100%, this creates a chain of inheritage where both adjust to the
size of the window.
This is useful when the page layout needs to occupy exactly the available height of the window, but can still grow to adapt
to additional content. For example, when the content surpasses the height of the window and needs to be scrolled, so with this
the body can expand beyond the height of the viewport if necessary.

And the height: 100vh inside the container, definies that the element needs to have a fixed height equal to 100% of the
viewport height, which is 100% of the visible height, without considering additional content that can make the layout
to grow.
