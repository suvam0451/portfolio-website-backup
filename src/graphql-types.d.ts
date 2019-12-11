export interface Query {
  allMarkdownRemark: MarkdownRemarkConnection | null;
}

export interface AllMarkdownRemarkQueryArgs {
  skip: number | null;
  limit: number | null;
  sort: markdownRemarkConnectionSort | null;
  filter: filterMarkdownRemark | null;
}
