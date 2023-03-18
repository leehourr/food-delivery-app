import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityClient } from "sanity";

const client = SanityClient({
  projectId: "zvnuchtt",
  dataset: "production",
  useCdn: true,
  apiVersion: "",
});

const builder = ImageUrlBuilder(client);
export const ImgUrl = (source) => builder.image(source);
