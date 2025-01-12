import { makeStyles } from '@mui/styles';
import { getPrimaryGradientColor, getSecondaryGradientColor, type AppTheme } from 'components/app/theme';
import colchuckImage from 'assets/img/colchuck.jpg';
import { convertPercentToVal } from 'utils/convertPercentToVal';

const HEADER_MARGIN = 20;
const MAX_OPACITY = 1;
const MIN_OPACITY = 0;

const calcMaxExtraTopMargin = (contentHeight: number): number => {
  const headerContentWithObservedPadding = contentHeight + (2 * HEADER_MARGIN);
  return window.innerHeight - headerContentWithObservedPadding;
};

const calcHeaderContentTopMargin = (scroll: number, contentHeight: number): number => {
  const maxExtraTopPadding = calcMaxExtraTopMargin(contentHeight);
  return Math.min(maxExtraTopPadding, scroll) + HEADER_MARGIN;
};

const calcPercentScroll = (scroll: number, contentHeight: number): number => {
  const maxExtraTopPadding = calcMaxExtraTopMargin(contentHeight);
  const percentScroll = Math.min(scroll / maxExtraTopPadding, 1);
  return percentScroll;
};

const calcHexAlpha = (scroll: number, contentHeight: number): string => {
  const percentScroll = calcPercentScroll(scroll, contentHeight);
  const opacity = convertPercentToVal(percentScroll, MAX_OPACITY * 0xff, MIN_OPACITY * 0xff);
  return opacity.toString(16).split('.')[0].padStart(2, '0');
};

const BACKGROUND_OPACITY_FADEOUT_THRESHOLD = 0.5;
const BACKGROUND_MAX_OPACITY = 0.5;
const calcHeaderContentBackgroundOpacity = (scroll: number, contentHeight: number): number => {
  const percentScroll = calcPercentScroll(scroll, contentHeight)
    / BACKGROUND_OPACITY_FADEOUT_THRESHOLD;
  return Math.min(
    Math.max((1 - percentScroll) * BACKGROUND_MAX_OPACITY, 0),
    BACKGROUND_MAX_OPACITY
  );
};

interface HeaderStylesProps {
  isDynamic: boolean;
  scrollY: number;
  contentHeight: number;
}

export const useStyles = makeStyles<AppTheme, HeaderStylesProps>((theme) => ({
  headerContainer: ({ isDynamic }) => ({
    color: theme.palette.common.white,
    minHeight: 'fit-content',
    height: isDynamic ? '100vh' : undefined,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: isDynamic ? undefined : `linear-gradient(to right, ${getSecondaryGradientColor(theme)}, ${getPrimaryGradientColor(theme)})`
  }),
  backgroundImage: {
    backgroundImage: `url(${colchuckImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    zIndex: '-2',
    position: 'absolute'
  },
  backgroundImageFilter: ({ scrollY, contentHeight, isDynamic }) => {
    const alpha = isDynamic ? calcHexAlpha(scrollY, contentHeight) : 'ff';
    return {
      backgroundImage: `linear-gradient(to right, ${getSecondaryGradientColor(theme)}${alpha}, ${getPrimaryGradientColor(theme)}${alpha})`,
      width: '100%',
      height: '100%',
      zIndex: '-1',
      position: 'absolute'
    };
  },
  headerContent: ({ scrollY, contentHeight, isDynamic }) => ({
    textAlign: 'center',
    width: 'fit-content',
    maxWidth: '80%',
    margin: 'auto',
    marginBottom: `${HEADER_MARGIN}px`,
    background: isDynamic ? `rgba(50, 50, 50, ${calcHeaderContentBackgroundOpacity(scrollY, contentHeight)})` : undefined,
    padding: '20px',
    borderRadius: '20px',
    marginTop: isDynamic ? `${calcHeaderContentTopMargin(scrollY, contentHeight)}px` : `${HEADER_MARGIN}px`
  }),
  title: {
    ...theme.typography.h1
  },
  subtitle: {
    ...theme.typography.subtitle1,
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  descriptor: {
    whiteSpace: 'nowrap'
  }
}));
