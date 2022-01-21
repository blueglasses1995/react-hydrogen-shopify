import {
  useShopQuery,
  ProductProviderFragment,
  flattenConnection,
  Link,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';
// Import the `LoadMore` component that you created.
import Button from '../../components/Button.client';
import ProductCard from '../../components/ProductCard';
// Fetch the first three products on the product list page.
export default function Index({first = 250}) {
  const brands = ['HELLO KITTY', 'GUNDAM', 'DIGIMON', 'LEGO', 'DRAGON BALL'];

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
      <div className="flex-col place-content-between">
        <h2 className="text-4xl font-bold uppercase mb-4">Brand</h2>
        {brands.map((brand) => (
          <div key={brand} className="collection-card mb-16">
            <h2 className="text-2xl font-bold uppercase mb-4">
              <Link
                to={'/collections/' + brand.toLowerCase().replace(' ', '-')}
              >
                {brand}
              </Link>
            </h2>
            <div className="inline-flex items-baseline">
              <div className="grid grid-cols-4 gap-12">
                {products
                  .filter(
                    (product) =>
                      product.handle.indexOf(
                        brand.toLowerCase().replace(' ', '-'),
                      ) >= 0,
                  )
                  .splice(0, 2)
                  .map((product) => (
                    // Each product card maps to a product in the storefront.
                    <ProductCard
                      className="col-span-1"
                      key={product.id}
                      product={product}
                    />
                  ))}
                <div className="col-span-2 grid grid-rows-6">
                  <p className="text-xl font-thin mb-4 inline-block row-span-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis nostrum, accusantium aperiam sed eaque atque
                    cupiditate voluptas veritatis optio, iure reiciendis non
                    vitae rerum provident facilis voluptatem magnam temporibus?
                    Pariatur.
                  </p>
                  <Button
                    className="inline-block row-end-7"
                    label={brand}
                    handleClick=""
                    url={
                      '/collections/' + brand.toLowerCase().replace(' ', '-')
                    }
                    passthroughProps=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
