export type PublicationInfo = {
  title: string;
  authors: [string, ...string[]];
  conference: {
    name: string;
    shortName: string;
    date: Date;
    location: string;
  };
  link: string;
  abstractFilename: string;
  thumbnailFilename: string;
}

export type PublicationInfos = {
  papers: PublicationInfo[];
  postersAndAbstracts: PublicationInfo[];
}
