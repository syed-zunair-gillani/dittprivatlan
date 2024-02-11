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
  categories(where: { orderby: { field: DATE, order: ASC } }) {
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
        trustpilotUrl
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


export const QBrokers = gql`
query brokers($terms: [String] = "private-loan") {
  brokers(
    first: 100
    where: {taxQuery: {taxArray: {taxonomy: BROKERCATEGORY, terms: $terms, field: SLUG}}}
  ) {
    nodes {
      title
      slug
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      brokerCategories {
        nodes {
          name
          slug
        }
      }
      brokerPostMeta {
        applyLink
      }
    }
  }
}`;


export const QSingleBrokers = gql`
query brokers($id: ID = "compari-loan") {
  broker(id: $id, idType: URI) {
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    brokerPostMeta {
      applyLink
      totalRating
      avgRating
    }
    content
  }
}`;