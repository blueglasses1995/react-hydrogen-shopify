import {
  useShopQuery,
  ProductProviderFragment,
  flattenConnection,
} from '@shopify/hydrogen';
import ProductList from '../../components/ProductList';
import gql from 'graphql-tag';
// Import the `LoadMore` component that you created.
import LoadMore from '../../components/LoadMore.client';
// Fetch the first three products on the product list page.
export default function Index({first = 50}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numProductMetafields: 0,
      includeReferenceMetafieldDetails: false,
      numProductVariants: 250,
      numProductMedia: 10,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
      numProductSellingPlanGroups: 10,
      numProductSellingPlans: 10,
      first,
    },
  });

  const products = flattenConnection(data.products);
  // Return the first three products and the load more button.
  return (
    <>
      <h2 className="text-4xl font-bold uppercase mb-4">Products</h2>
      <LoadMore current={first}>
        <ProductList products={products} />
      </LoadMore>
    </>
  );
}

// Define the GraphQL query.
const QUERY = gql`
  query HomeQuery(
    $numProductMetafields: Int!
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
    $first: Int!
  ) {
    products(first: $first) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }
  ${ProductProviderFragment}
`;
