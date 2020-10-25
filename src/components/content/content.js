import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardImg,
  CardDeck,
  CardGroup,
} from "reactstrap";
import { Spinner } from "reactstrap";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [
        { year: "2006" },
        { year: "2007" },
        { year: "2008" },
        { year: "2009" },
        { year: "2010" },
        { year: "2011" },
        { year: "2012" },
        { year: "2013" },
        { year: "2014" },
        { year: "2015" },
        { year: "2016" },
        { year: "2017" },
        { year: "2018" },
        { year: "2019" },
        { year: "2020" },
      ],
      launch: null,
      land: null,
    };

    // this.handelLand = this.handelLand.bind(this);
  }

  componentDidMount() {
    const { getAllLaunchPrograms } = this.props;
    getAllLaunchPrograms();
  }

  handeler = (event) => {
    const { getAllLaunchesData } = this.props;
    const { launch, land } = this.state;
    let yearValue = event.target.innerText;
    let parsedYear = parseInt(yearValue);
    getAllLaunchesData({ parsedYear, launch, land });
  };

  handelLaunch = ({ value }) => {
    const { getContentOnLaunch } = this.props;
    // this.props.history.push("/thePath");
    this.setState({
      launch: value,
    });
    getContentOnLaunch(value);
  };

  handelLand = ({ value }) => {
    const { getContentOnLaunchAndLand } = this.props;
    this.setState(
      {
        land: value,
      },
      () => {
        const { launch, land } = this.state;
        getContentOnLaunchAndLand({ launch, land });
      }
    );
  };
  render() {
    const { years } = this.state;
    const { launchData, phase } = this.props;

    return (
      <div>
        <div class="row">
          <div class="column">
            <Card>
              <CardBody>
                <CardTitle>Filters</CardTitle>
                <CardSubtitle>Launch Year</CardSubtitle>
                <hr></hr>

                {years.map((i) => {
                  return (
                    <Button class="btn" onClick={this.handeler}>
                      {i.year}
                    </Button>
                  );
                })}
                <CardSubtitle>Specified Launch</CardSubtitle>
                <hr></hr>

                <Button
                  onClick={(e) => {
                    this.handelLaunch({ value: true, launch: "launch" });
                  }}
                >
                  True
                </Button>
                <Button
                  onClick={(e) =>
                    this.handelLaunch({ value: false, launch: "launch" })
                  }
                >
                  False
                </Button>

                <CardSubtitle>Successful Landing</CardSubtitle>
                <hr></hr>

                <Button
                  onClick={(event) => {
                    this.handelLand({ value: true, land: "land" });
                  }}
                >
                  True
                </Button>
                <Button
                  onClick={(event) => {
                    this.handelLand({ value: false, land: "land" });
                  }}
                >
                  False
                </Button>
              </CardBody>
            </Card>
          </div>
          <CardGroup>
            {launchData && launchData.length > 0
              ? launchData &&
                launchData.map((item) => {
                  let mission =
                    item.mission_id.length !== 0
                      ? item.mission_id
                      : "No Mission Id Found";
                  return (
                    <CardGroup>
                      <Card>
                        <CardBody>
                          <CardImg
                            top
                            width="100%"
                            src={item && item.links.mission_patch_small}
                            alt="No Image Found"
                          />
                          <CardTitle>
                            {item.mission_name + " #" + item.flight_number}
                          </CardTitle>
                          <h6>Mission Id </h6>{" "}
                          <ul>
                            <li>{mission}</li>
                          </ul>
                          <h6> Launch Year : {item.launch_year}</h6>
                          <h6>Successful Launch : {item.tbd} </h6>
                          <h6>Successful Landing : {item.mission_name}</h6>
                        </CardBody>
                      </Card>
                    </CardGroup>
                  );
                })
              : "NO Data Found"}
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
