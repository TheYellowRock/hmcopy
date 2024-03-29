import {defer, json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {
  getPaginationVariables,
  Image,
  Money,
  Pagination,
} from '@shopify/hydrogen';
import type {CollectionFragment} from 'storefrontapi.generated';
import BigBanner from '~/components/homePage/BigBanner';
import ImageBanner from '~/components/homePage/ImageBanner';
import SmallBanner from '~/components/homePage/SmallBanner';
import CtaBanner from '~/components/homePage/CtaBanner';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context, request}: LoaderFunctionArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const {collections} = await context.storefront.query(COLLECTIONS_QUERY, {
    variables: paginationVariables,
  });
  //const collectionsCarousel = collections.nodes
  console.log({collections});
  return json({collections});
}

export default function Homepage() {
  const {collections} = useLoaderData<typeof loader>();
  console.log({collections});
  const imgUrl1 =
    'https://cdn.shopify.com/s/files/1/0563/8835/4111/files/Screenshot_2024-02-11_012632.jpg?v=1707669052';
  const imgUrl2 =
    'https://cdn.shopify.com/s/files/1/0563/8835/4111/files/Screenshot_2024-02-11_172845.jpg?v=1707669052';
  const bannerText1 = 'New denim styles for spring';
  const bannerText2 = 'Flats in focus';

  return (
    <div className="home">
      <BigBanner />
      <ImageBanner imgUrl={imgUrl1} bannerText={bannerText1} />
      <CollectionsCarousel collections={collections.nodes} />
      <SmallBanner />
      <ImageBanner imgUrl={imgUrl2} bannerText={bannerText2} />
      <CtaBanner />
    </div>
  );
}

function CollectionsCarousel({
  collections,
}: {
  collections: CollectionFragment[];
}) {
  return (
    <div className="w-full">
      <div className="mx-auto w-7/12 flex flex-col py-7">
        <div className="font-bold">Popular categories</div>

        <CollectionCarouselGrid collections={collections} />
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
