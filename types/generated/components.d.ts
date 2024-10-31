import type { Struct, Schema } from '@strapi/strapi';

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    sharedImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    socialMedia: Schema.Attribute.Enumeration<
      ['tiktok', 'facebook', 'youtube', 'instagram', 'spotify']
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-data': SeoMetaData;
      'elements.social-link': ElementsSocialLink;
      'elements.link': ElementsLink;
    }
  }
}
