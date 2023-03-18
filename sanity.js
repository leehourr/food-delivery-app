import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "zvnuchtt",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const ImgUrl = (source) => builder.image(source);

export default client;
