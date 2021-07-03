import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const FONT_GOOGLESANS_REGULAR = 'GoogleSans-Regular';
export const NEWYORK_MEDIUM_REGULAR = 'NewYorkMedium-Regular';
export const ROBOTO_MEDIUM = 'Roboto-Medium';
export const ROBOTO_REGULAR = 'Roboto-Regular';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_23 = scaleFont(23);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_36 = scaleFont(36);
export const FONT_SIZE_35 = scaleFont(35);
export const FONT_SIZE_30 = scaleFont(30);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_31 = scaleFont(31);
export const FONT_SIZE_32 = scaleFont(32);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const Fonts = {
  bold: 'STIXSizeOneSym-Bold',
  regular: 'STIXSizeOneSym-Regular',
  CABIN: 'Cabin-Regular',
  CABINBold: 'Cabin-Bold',
};
