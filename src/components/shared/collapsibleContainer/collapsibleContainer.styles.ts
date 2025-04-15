import { makeStyles } from '@mui/styles';
import { AppTheme } from 'components/app/theme';

interface CollapsibleContainerStylesProps {
  collapsedHeight: number;
}

export const useStyles = makeStyles<AppTheme, CollapsibleContainerStylesProps>({
  collapsed: ({ collapsedHeight }) => ({
    height: `${collapsedHeight}px`,
    overflow: 'hidden',
    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
  })
});
