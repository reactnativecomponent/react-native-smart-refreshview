/**
 * Created by dowin on 2017/11/28.
 */
'use strict';
import React, {
    Component,
} from 'react';
import {
    requireNativeComponent,
    ScrollView,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
const UIManager = require('react-native/lib/UIManager');
const ReactNative = require('react-native');
const REF_PTR = "ptr_ref";

export default class SmartRefreshLayout extends Component {

    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <RNSmartRefreshLayout
                ref={REF_PTR}
                {...this.props}
                style={{flex:1}}
                onPtrRefresh={() => this._onRefresh()}>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </RNSmartRefreshLayout>
        );
    }
}
console.info('SmartRefreshLayout',SmartRefreshLayout.name)
// SmartRefreshLayout.name = "RCTSmartRefreshLayout"; //便于调试时显示(可以设置为任意字符串)
SmartRefreshLayout.propTypes = {
    hStyle: PropTypes.number,
    refreshing: PropTypes.bool,
    arrowDrawable: PropTypes.string,
    ...View.propTypes,
};

const RNSmartRefreshLayout = requireNativeComponent('RCTSmartRefreshLayout', SmartRefreshLayout);