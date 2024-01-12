import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'





export type Credit = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  image: {
    asset: {
      url: string;
    };
  };
  externalLink: string;
 };

 export type nonsense = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  image: {
    asset: {
      url: string;
    };
  };
  videoLink: string;
  externalLink: string;
 };



 export type Contact = {
  _id: string;
  title: string;
  name: string;
  link: string;
  noContact: boolean;

 };


 export type searchItem = {
  _id: string;
  text: string;

 };


 export type heroSection = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  body: string;
 };