import { assetsInfo } from "../../API"; // static is set? by default?
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
    assetsResult: null,
    error: null,
    loading: true,
  };

  // 1. get the raw data from API server
  // 2. extract speified info at next step (Presenter)
  async componentDidMount() {
    try {
      const { data: homeResult } = await assetsInfo.assetsInfoDetail();
      this.setState({
        homeResult,
      });
    } catch {
      this.setState({
        error: "Can't find Price Information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { homeResult, error, loading } = this.state;
    return <HomePresenter homeResult={homeResult} error={error} loading={loading} />;
  }
}
