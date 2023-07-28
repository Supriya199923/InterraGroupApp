import * as React from 'react';
import { IDemoProps } from './IDemoProps';

export default class Demo extends React.Component<IDemoProps, {}> {
  public render(): React.ReactElement<IDemoProps> {

    return (
      <span className="displayLine"><b>List Of Users Logged in Before</b></span>
    );
  }
}
