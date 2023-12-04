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

// const calcHeaderHeight = (scroll: number, contentHeight: number): number => {
//   const vh = window.innerHeight;
//   const maxTopPadding = (vh - contentHeight) / 2;
//   const minHeight = maxTopPadding + HEADER_PADDING + contentHeight;
//   const height = vh - scroll;
//   return Math.max(minHeight, height);
// };

interface HeaderStylesProps {
  scrollY: number;
  contentHeight: number;
}

export const useStyles = makeStyles<typeof Theme, HeaderStylesProps>((theme) => ({
  headerContainer: ({ scrollY, contentHeight }): ClassNameMap => ({
    color: 'white',
    minHeight: 'fit-content',
    // height: `${calcHeaderHeight(scrollY, contentHeight)}px`,
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    // filter: `linear-gradient(to right, ${theme.palette.secondary.main}
    // ${calcHexAlpha(scrollY, contentHeight)},
    // ${theme.palette.primary.main}${calcHexAlpha(scrollY, contentHeight)})`
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
  backgroundImageFilter: ({ scrollY, contentHeight }): ClassNameMap => ({
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main}${calcHexAlpha(scrollY, contentHeight)}, ${theme.palette.primary.main}${calcHexAlpha(scrollY, contentHeight)})`,
    width: '100%',
    height: '100%',
    // zIndex: -1,
    zIndex: '-1',
    position: 'absolute'
  }),
  // 'headerContainer::before': {
  //   content: '',
  //   backgroundImage: `url(${Higgins})`,
  //   width: '100%',
  //   height: '100%'
  // },
  headerContent: ({ scrollY, contentHeight }): ClassNameMap => ({
    textAlign: 'center',
    margin: `${HEADER_PADDING}px`,
    marginTop: `${calcHeaderContentOffset(scrollY, contentHeight)}px`
  }),
  title: {
    ...theme.typography.h1
  },
  subtitle: {
    ...theme.typography.h3
  }
}));
