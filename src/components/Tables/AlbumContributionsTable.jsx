/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component, useState } from "react";
import classNames from "classnames";
// react component for creating dynamic tables
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { MDBDataTable, MDBBtn } from 'mdbreact';
import * as moment from 'moment'

import Options from 'components/Tables/Options.jsx'
import { albumContributionColumns } from 'components/Tables/ColumnConfig.js'

const momentRandom = require('moment-random');

function randomDate(start, end) {
    return momentRandom(start,end).format("MM-DD-YYYY")
}


const rows = [
  {name: "Level Up", album: "Level Up", uploadedBy:"ED Raw", uploaded: randomDate(new Date(2019, 8, 16), new Date(2019, 7, 15)), contributionType: "Feature", actions: <Options />},
  {name: "'Posed to Be", album: "'Posed to Be", uploadedBy:"SWAD", uploaded: randomDate(new Date(2019, 8, 16), new Date(2019, 7, 15)), contributionType: "Feature", actions: <Options />},
  {name: "All I Want", album: "Heavens Drive", uploadedBy:"SWAD", uploaded: randomDate(new Date(2019, 8, 16), new Date(2019, 7, 15)), contributionType: "Feature", actions: <Options />},
]



class AlbumContributionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    var data = {columns: albumContributionColumns, rows: rows}

    return (
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Contributions</CardTitle>
          </CardHeader>
          <CardBody>
          <MDBDataTable
            entriesOptions={[5, 10, 15, 20, 25]}
            entries={5}
            responsive
            striped
            data={data}
          />

          </CardBody>
        </Card>
    );
  }
}

export default AlbumContributionsTable;
