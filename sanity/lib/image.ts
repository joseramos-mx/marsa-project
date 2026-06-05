import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

// `source` is typed as unknown because @sanity/image-url's public type is the
// SanityImageSource union, but importing it from internals is unstable. Cast
// at the call site if you need stronger typing.
export const urlFor = (source: unknown) =>
  builder ? builder.image(source as never) : null;
