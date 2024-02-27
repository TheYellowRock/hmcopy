import {Link, useLoaderData} from '@remix-run/react';
import {LoaderFunctionArgs, json} from '@remix-run/server-runtime';
import {getPaginationVariables, Image, Pagination} from '@shopify/hydrogen';
import React from 'react';
import {CollectionFragment} from 'storefrontapi.generated';

export async function loader({context, request}: LoaderFunctionArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });

  return json({collections});
}

export default function CollectionsCarousel() {
  const {collections} = useLoaderData<typeof loader>();
  console.log({collections})
  return (
    <div className="w-full">
      <div className="mx-auto w-7/12 flex flex-col">
        <div className="font-bold">Popular categories</div>
        <Pagination connection={collections}>
          {({nodes, isLoading, PreviousLink, NextLink}) => (
            <div>
                <PreviousLink>
              {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
            </PreviousLink>
               <CollectionCarouselGrid collections={nodes} /> 
               <NextLink>
              {isLoading ? 'Loading...' : <span>Load more ↓</span>}
            </NextLink>
            </div>
            
          )}
        </Pagination>
      </div>
    </div>
  );
}

function CollectionCarouselGrid({
  collections,
}: {
  collections: CollectionFragment[];
}) {
  return (
    <div className="grid grid-cols-8">
      {collections.map((collection, index) => (
        <CollectionCarouselItem collection={collection} index={index} />
      ))}
    </div>
  );
}

function CollectionCarouselItem({
  collection,
  index,
}: {
  collection: CollectionFragment;
  index: number;
}) {
  return (
    <Link
      className="collection-item"
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
    >
      {collection?.image && (
        <Image
          alt={collection.image.altText || collection.title}
          aspectRatio="1/1"
          data={collection.image}
          loading={index < 3 ? 'eager' : undefined}
        />
      )}
      <h5>{collection.title}</h5>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
` as const;