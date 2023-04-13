import { Component } from 'solid-js';
import { Breadcrumbs as SuidBreadcrumbs } from '@suid/material';

type SuidBreadcrumbsProps = Parameters<typeof SuidBreadcrumbs>[0];
export interface BreadcrumbsProps extends SuidBreadcrumbsProps {}

export const Breadcrumbs: Component<BreadcrumbsProps> = (props) => {
  return <SuidBreadcrumbs {...props} />;
};
