import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const PostTable = props => {
    return (
        <>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Category</th>
            <th>Username</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { Array(10).fill(1).map((el,i) => 
              <tr>
            <td>{i+1}</td>
            <td>Test</td>
            <td>others</td>
            <td>@sjlee2016</td>
            <td>$100</td>
          </tr>)
        }
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </>
    );
};

PostTable.propTypes = {
    
};

export default PostTable;