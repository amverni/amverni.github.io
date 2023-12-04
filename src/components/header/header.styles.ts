import { ClassNameMap, makeStyles } from '@mui/styles';
import Theme from 'components/app/theme';
import higgins from 'assets/img/higgins.jpg';
import { convertPercentToVal } from 'utils/convertPercentToVal';

const HEADER_PADDING = 50;
const MAX_OPACITY = 1;
const MIN_OPACITY = 0.5;

const calcHeaderContentOffset = (scroll: number, contentHeight: number): number => {
  const maxPadding = window.innerHeight - contentHeight - HEADER_PADDING;
  return Math.min(maxPadding, (scroll + HEADER_PADDING));
};

const calcHexAlpha = (scroll: number, contentHeight: number): string => {
  const maxPadding = (window.innerHeight - contentHeight);
  const percentScroll = Math.min(scroll / (maxPadding - HEADER_PADDING), 1);
  const opacity = convertPercentToVal(percentScroll, MAX_OPACITY * 0xff, MIN_OPACITY * 0xff);
  return opacity.toString(16).split('.')[0];
};

interface HeaderStylesProps {
  isDynamic: boolean;
  scrollY: number;
  contentHeight: number;
}

export const useStyles = makeStyles<typeof Theme, HeaderStylesProps>((theme) => ({
  headerContainer: ({ isDynamic }): Partial<ClassNameMap> => ({
    color: 'white',
    minHeight: 'fit-content',
    height: isDynamic ? '100vh' : undefined,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: isDynamic ? undefined : `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
  }),
  backgroundImage: {
    backgroundImage: `url(${higgins})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    zIndex: '-2',
    position: 'absolute'
  },
  backgroundImageFilter: ({ scrollY, contentHeight, isDynamic }): ClassNameMap => {
    const alpha = isDynamic ? calcHexAlpha(scrollY, contentHeight) : 'ff';
    return {
      backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main}${alpha}, ${theme.palette.primary.main}${alpha})`,
      width: '100%',
      height: '100%',
      zIndex: '-1',
      position: 'absolute'
    };
  },
  headerContent: ({ scrollY, contentHeight, isDynamic }): Partial<ClassNameMap> => ({
    textAlign: 'center',
    margin: `${HEADER_PADDING}px`,
    marginTop: isDynamic ? `${calcHeaderContentOffset(scrollY, contentHeight)}px` : `${HEADER_PADDING}px`
  }),
  title: {
    ...theme.typography.h1
  },
  subtitle: {
    ...theme.typography.h3
  }
}));
