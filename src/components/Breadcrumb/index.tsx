import { Component } from 'solid-js';
import { Breadcrumb as HuiBreadcrumb, BreadcrumbProps as HuiBreadcrumbsProps } from '@hope-ui/solid';

export interface BreadcrumbsProps extends HuiBreadcrumbsProps {}

export const Breadcrumb: Component<BreadcrumbsProps> = (props) => {
  return <HuiBreadcrumb {...props} />;
};
