import { defineQuery } from "next-sanity"

export const DIRECTOR_QUERY = defineQuery(
  `*[_type == "director"] | order(date desc){
    _id,
    title,
    titleEng,
    "slug": slug.current,
    date,
    premiere,
  }`
)

export const DIRECTOR_BY_SLUG_QUERY = defineQuery(
  `*[_type == "director" && slug.current == $slug][0]{
    _id,
    title,
    titleEng,
    "slug": slug.current,
    date,
    premiere,
    duration,
    credits[]{
      _key,
      role,
      roleEng,
      name,
    },
    synopsis,
    synopsisEng,
    image{
      "dimensions": asset->metadata.dimensions,
      asset->{
        _id,
        url
      }
    }
  }`
)

export const EDITOR_QUERY = defineQuery(
  `*[_type == "editor"][0]{
    title,
    features[]{
      _key,
      title,
      titleEng,
      director, 
      detail,
      detailEng,
      year,
      link
    },
    shorts[]{
      _key,
      title,
      titleEng,
      director, 
      detail,
      detailEng,
      year,
      link
    },
    trailers[]{
      _key,
      title,
      titleEng,
      link
    }
  }`
)

export const MIXTAPES_QUERY = defineQuery(
  `*[_type == "mixtapes"][0]{
    _id,
    text,
    textEng,
    mixtapes[]{
      _key,
      title,
      titleEng,
      link
    }
  }`
)

export const PHOTOS_QUERY = defineQuery(
  `*[_type == "photos"]{
    _id,
    photos[]{
      "dimensions": asset->metadata.dimensions,
      _key,
      asset->{
        _id,
        url
      }
    }
  }`
)

export const INFO_QUERY = defineQuery(
  `*[_type == "info"][0]{
    _id,
    name,
    bio,
    bioEng,
    mail,
    instagram,
    vimeoId,
    coverVideo{
      asset->{
        _id,
        url
      }
    },
    }`
)
