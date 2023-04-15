import { Component } from 'solid-js';
import { Skeleton as HuiSkeleton, SkeletonProps as HuiSkeletonProps } from '@hope-ui/solid';

export interface SkeletonBoxProps extends HuiSkeletonProps {}

export const SkeletonBox: Component<SkeletonBoxProps> = (props) => {
  return <HuiSkeleton {...props} />;
};
