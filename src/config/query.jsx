import { gql } from "@apollo/client";

export const QMortgages = gql`
  query mortgages {
    mortgages(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        mortgagePostTypeMeta {
          borrowNowLink
          extraContent
          interestFrom
          prosAndCons {
            consList {
              cons
            }
            prosList {
              pros
            }
          }
        }
      }
    }
  }
`;

export const QSingleMortgage = gql`
query mortgage($id: ID = "") {
     mortgage(id: $id, idType: URI) {
      title
      slug
      excerpt
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      mortgagePostTypeMeta {
        borrowNowLink
        extraContent
        interestFrom
        prosAndCons {
          consList {
            cons
          }
          prosList {
            pros
          }
        }
      }
    }
  }
`;

export const QCategoriesList = gql`
query categories {
  categories {
    nodes {
      title
      slug
      categoriesPostMeta {
        categoriyIcon
      }
    }
  }
}`;

export const QSingleCategory = gql`
query mortgage($id: ID = "") {
  category(id: $id, idType: URI) {
    title
    slug
    content
    categoriesPostMeta {
      listCard {
        link
        lists {
          list
        }
        icon {
          mediaItemUrl
        }
      }
      categoriyIcon
      subItems {
        applyLink
        icon {
          mediaItemUrl
        }
        readMoreLink
        title
      }
    }
  }
}`;