import React, { Component } from "react";
import "./headersecondsegment.css";
import { SearchInput } from "../SearchInput/searchinput";

class HeaderSecondSegment extends Component {
  render() {
    return (
      <div className="swTest-header-secondSegment">
        <div className="swTest-header-tabs">
          <span
            className="swTest-header-tabTitles"
            style={this.props.Allstyles}
            onMouseDown={this.props.changeTabsAll}>
            All
          </span>
          <span
            className="swTest-header-tabTitles"
            style={this.props.Favstyles}
            onMouseDown={this.props.changeTabsFav}>
            Favorites
          </span>
          <span
            className="swTest-header-tabTitles"
            style={this.props.Arcstyles}
            onMouseDown={this.props.changeTabsArc}>
            Archived
          </span>
        </div>
        <div className="swTest-header-searchBar">
          <img
            className="swTest-header-searchIcon"
            src="https://cdn.discordapp.com/attachments/248430185463021569/555631325080715274/magnify_1.png"
            alt="search icon"
          />
          <SearchInput />
        </div>
      </div>
    );
  }
}
export default HeaderSecondSegment;
