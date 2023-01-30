import { makeStyles } from 'tss-react/mui';

export default makeStyles((theme) => ({
  movieContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'auto',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
