import { connect } from 'react-redux';
import HomeGameTable from './HomeGameTable';

const mapDispatchToProps = dispatch => {
  return {
    onClick: value => () => alert('Click on Cell!'),
  };
};

const mapStateToProps = state => {
  const cells = [];
  for (let index = 0; index < 9; index++) {
    cells[index] = {
      color: index % 2 == 0 ? 'white' : 'black',
      bgcolor: index % 2 == 0 ? 'black' : 'white',
    };
  }

  return {
    cells,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeGameTable);
