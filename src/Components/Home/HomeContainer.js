import React from 'react';
import { assetsInfo } from "../../API";
import HomePresenter from './HomePresenter';

export default class extends React.Component {
    state = {
    assetsResult: null,
    error: null,
    loading: true,
    columns: [
      {
        name:"id",
        label:"ID"
      }
    ],
  };

  async componentDidMount() {
    try {
      const { data: assetsResult } = await assetsInfo.pruebaInfoDetail("1");
      this.setState({
        assetsResult,
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
    const { assetsResult, error, loading, columns, theme } = this.state;
    return <HomePresenter assetsResult={assetsResult} error={error} loading={loading} columns={columns} />;
  }
}
