import { PublicationInfos } from 'types/publication.types';
import imageAnnotationEvaluationAbstract from 'assets/data/publications/abstracts/imageAnnotationInterfaces.md';
import imageAnnotationEvaluationThumbnail from 'assets/img/publications/towards_universal_evaluation_of_image_annotation_interfaces_thumbnail.jpg';
import conversationDisentanglementAbstract from 'assets/data/publications/abstracts/chatDisentanglement.md';
import conversationDisentanglementThumbnail from 'assets/img/publications/conversationDisentanglementThumbnail.jpg';

export const publicationsData: PublicationInfos = {
  papers: [
    {
      title: 'Chat Disentanglement: Data for New Domains and Methods for More Accurate Annotation',
      authors: ['Sai R. Gouravajhala', 'Andrew M. Vernier', 'Yiming Shi', 'Zihan Li', 'Mark Ackerman', 'Jonathan K. Kummerfeld'],
      conference: {
        name: 'Proceedings of the The 21st Annual Workshop of the Australasian Language Technology Association',
        shortName: 'ALTA',
        date: new Date(2023, 10, 29), /* November 29 - December 1, 2023 */
        location: 'Melbourne, AU'
      },
      abstractFilename: conversationDisentanglementAbstract,
      link: 'https://aclanthology.org/2023.alta-1.12/',
      thumbnailFilename: conversationDisentanglementThumbnail
    }
  ],
  postersAndAbstracts: [
    {
      title: 'Towards Universal Evaluation of Image Annotation Interfaces',
      authors: ['Andrew M. Vernier', 'Jean Y. Song', 'Edward Sun', 'Allison Kench', 'Walter S. Lasecki'],
      conference: {
        name: 'Proceedings of the ACM Symposium on User Interface Software and Technology',
        shortName: 'UIST',
        date: new Date(2019, 9, 20), /* October 20-23, 2019 */
        location: 'New Orleans, LA'
      },
      abstractFilename: imageAnnotationEvaluationAbstract,
      link: 'https://dl.acm.org/doi/10.1145/3332167.3357122',
      thumbnailFilename: imageAnnotationEvaluationThumbnail
    }
  ]
};
