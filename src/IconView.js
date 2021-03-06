import React, { createRef, useContext } from "react";
import { findNodeHandle, Image } from "react-native";
import { NativeAdContext, nativeAdView } from "./context";

const iconViewRef = createRef();

const IconView = (props) => {
  const { nativeAd, setNativeAd } = useContext(NativeAdContext);

  const _onLayout = () => {
    let handle = findNodeHandle(iconViewRef.current);
    nativeAdView.current?.setNativeProps({
      icon: handle,
    });
  };

  return nativeAd && nativeAd.icon ? (
    <Image
      {...props}
      resizeMode="cover"
      ref={iconViewRef}
      onLayout={_onLayout}
      source={{ uri: nativeAd.icon }}
    />
  ) : null;
};

export default IconView;
