import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { useEffect } from "react";
import getAllProducts from "@framework/products/get-all-products";

export async function getStaticProps(context: GetStaticProps) {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const message = "hello world";

  return <div>{JSON.stringify(products)}</div>;
}
