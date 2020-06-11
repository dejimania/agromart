import React, { Component } from 'react';
import { PaginationButtons } from './PaginationButtons';

export class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [5, 10, 25, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }

  handlePageSizeChange = (evt) => {
    this.props.setPageSize(evt.target.value);
  }

  handleSortPropertyChange = (evt) => {
    this.props.setSortProperty(evt.target.value);
  }
  
  render() {
    return (
      <div className="m-2">
        <div className="text-center m-1">
          <PaginationButtons
            currentPage={this.props.currentPage}
            pageCount={this.props.pageCount}
            navigate={this.props.navigateToPage}
          />
        </div>
        <div className="form-inline justify-content-center">
          <select className="form-control"
            onChange={ this.handlePageSizeChange }
            value={ this.props.pageSizes || this.pageSizes[0] }
          >
            { this.pageSizes.map((s) => {
              return <option value={s} key={s}>{s} per page</option>
            })}
          </select>
          <select className="form-control"
            onChange={ this.props.handleSortPropertyChange }
            value= { this.props.sortKey || this.sortKey[0] }
          >
            { this.sortKeys.map((k) => {
              return <option value={k.lowerCase()} key={k}>
                Sort By { k }
              </option>
            })}
          </select>
        </div> 
      </div>
    )
  }
}

export default PaginationControls
