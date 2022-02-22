import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'auto',
        },
        header: {

        },
        item: {
          padding: theme.spacing(2, 0),
          color: theme.palette.custom.fonts.fontTwo,
          '&:first-child': {
            paddingTop: 0,
          },
          '&:last-child': {
            paddingBottom: 0,
          },
          '&:not(:last-child)': {
            borderBottom: `solid 1px ${theme.palette.divider}`,
          },
          '& .label': {
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(3),
          },
          '& .detail': {
            '&.MuiTypography-body1': {
              overflowWrap: 'anywhere',
            },
          },
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& .label': {
              marginBottom: 0,
            },
          },
        },
      });
    },
  )();

  return styles;
};
